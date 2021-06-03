import React from 'react';
import {
	ChartDataShape,
	ChartTooltip,
	Line,
	LinearXAxis,
	LinearXAxisTickLabel,
	LinearXAxisTickLine,
	LinearXAxisTickSeries,
	LinearYAxis,
	LinearYAxisTickLabel,
	LinearYAxisTickLine,
	LinearYAxisTickSeries,
	LineChart,
	LineSeries,
	PointSeries,
	ScatterPlot,
	ScatterPoint,
	ScatterSeries,
	TooltipArea,
	TooltipTemplate,
} from 'reaviz';
import theme from '../../theme';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useBoolean, useCss } from 'react-use';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	Button, ButtonGroup, Heading, HStack,
	Text, VStack,
} from '@chakra-ui/react';
import { setSimTeam1, setSimTeam2 } from '../../store/slices/simSlice';
import { routePaths } from '../../consts/routePaths';
import { useHistory } from 'react-router-dom';
import { renderSimRunDuration } from './DevModalTabPanelSim';
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/all';
import { FaRegTrashAlt } from 'react-icons/fa';
import { clearSimHistory } from '../../store/slices/simHistorySlice';
import { GenerateRunsButton } from '../components/GenerateRunsButton';

/**
 * Chart to display find opponent sim runs.
 * @todo Split up this overly complex component.
 */
export const DevModalTabPanelSimChart: React.FC<{ isFull: boolean, onCloseModal: () => void}> = ({ isFull, onCloseModal }) => {
	const dispatch = useAppDispatch();
	const { runs } = useAppSelector((state) => state.simHistory);
	const history = useHistory();
	const [ isShowingChartLine, toggleChartType ] = useBoolean(true);
	const [ alertDetails, setAlertDetails ] = React.useState(null as null | typeof runs[0]);
	const alertCancelRef = React.useRef<HTMLButtonElement | null>(null);
	const tooltipClassName = useCss({
		'--color-tooltip': theme.colors.gray['600'], // background
		'--color-on-tooltip': theme.colors.white, // text color
		padding: '10px',
	});
	const dataLine = runs.map((runDetails, index) => ({
		id: runDetails.id.toString(),
		key: index, // start with zero cause...well, this chart library doesn't document a lot of hows except storybook
		data: runDetails.duration,
		metadata: runDetails,
	} as ChartDataShape));
	const dataScatter = runs.map((runDetails, index) => ({
		id: runDetails.id.toString(),
		key: index, // start with zero cause...well, this chart library doesn't document a lot of hows except storybook
		data: runDetails.length,
		metadata: runDetails,
	} as ChartDataShape));

	const onCloseAlert = () => {
		setAlertDetails(null);
	};

	const onClickAlert = () => {
		dispatch(setSimTeam1(alertDetails!.team1));
		dispatch(setSimTeam2(alertDetails!.team2));
		// todo - refactor redundant push logic
		history.push({
			pathname: routePaths.RESULTS,
			search: `?team1=${alertDetails!.team1!.team.id}&team2=${alertDetails!.team2!.team.id}`,
			state: {}, // this is used to determine prior route
		});
		onCloseModal();
	};

	return (
		<Box
			height={'full'}
			width={'full'}
			pointerEvents={isFull ? 'auto' : 'none'}
		>
			{isFull && (
				<HStack
					justifyContent={'space-between'}
					alignItems={'flex-start'}
				>
					<VStack
						ml={12}
						alignItems={'flex-start'}
					>
						<Heading
							fontSize={'sm'}
							fontWeight={'normal'}
						>
							{isShowingChartLine
								? 'Line chart used to identify duration anomalies as indicated by spikes'
								: 'Scatter chart used to see relationship between duration and results length'
							}
						</Heading>
						<Text
							fontSize={'xs'}
							color="gray.500"
						>
							{isShowingChartLine
								? 'Y: Duration of sims, X: Series of run'
								: 'Y: Run results length, X: Series of runs, Bubbles: duration'
							}
						</Text>
					</VStack>
					<ButtonGroup>
						<Button
							size={'xs'}
							variant="outline"
							leftIcon={isShowingChartLine ? <AiOutlineDotChart /> : <AiOutlineLineChart />}
							colorScheme="blue"
							onClick={() => toggleChartType()}
						>
							{isShowingChartLine
								? 'Switch to Scatter Chart'
								: 'Switch to Line Chart'
							}
						</Button>
						<GenerateRunsButton />
						<Button
							size={'xs'}
							variant="outline"
							leftIcon={<FaRegTrashAlt />}
							colorScheme="red"
							onClick={() => dispatch(clearSimHistory())}
						>
							Clear Runs
						</Button>
					</ButtonGroup>
				</HStack>
			)}
			{isShowingChartLine
				? (
					<LineChart
						data={dataLine}
						margins={20}
						yAxis={
							<LinearYAxis
								scaled={true}
								type="value"
								tickSeries={
									<LinearYAxisTickSeries
										line={<LinearYAxisTickLine position="center" />}
										label={<LinearYAxisTickLabel
											format={(value) => `${value}ms`}
											padding={0}
										/>}
									/>
								}
							/>
						}
						xAxis={
							<LinearXAxis
								type="value"
								scaled={true}
								tickSeries={
									<LinearXAxisTickSeries
										line={<LinearXAxisTickLine position="center" />}
										label={<LinearXAxisTickLabel padding={3} />}
									/>
								}
							/>
						}
						series={
							<LineSeries
								colorScheme={theme.colors.blue['500']}
								line={<Line strokeWidth={2} />}
								symbols={(
									<PointSeries
										show={'hover'}
										point={
											<ScatterPoint
												symbol={({ metadata }) => {
													return (
														<circle
															cx="0"
															cy="0"
															r="6"
															style={{
																fill: theme.colors.blue['600'],
																stroke: theme.colors.blue['400'],
																strokeWidth: 1.0,
															}}
															onClick={(e) => {
																e.stopPropagation();
																setAlertDetails(metadata);
															}}
															cursor="pointer"
														/>
													);
												}}
											/>
										}
									/>
								)}
								tooltip={
									<TooltipArea
										tooltip={
											<ChartTooltip
												followCursor={true}
												className={tooltipClassName}
												modifiers={{
													offset: '5px, 5px'
												}}
												content={({ id, metadata }:
													{ id: ChartDataShape['id'], metadata: typeof runs[0], y: ChartDataShape['data'] }
												) => (
													<TooltipTemplate
														className={tooltipClassName}
														value={{
															x: `${metadata.team1?.team.nickname} vs. ${metadata.team2?.team.nickname}`,
															y: `Run ${id} = ${metadata.length} results in ${metadata.duration}ms`,
														}}
													/>
												)}
											/>
										}
									/>
								}
							/>
						}
					/>
				)
				: (
					<ScatterPlot
						data={dataScatter as any}
						margins={20}
						yAxis={
							<LinearYAxis
								scaled={true}
								type="value"
								tickSeries={
									<LinearYAxisTickSeries
										line={<LinearYAxisTickLine position="center" />}
										label={<LinearYAxisTickLabel
											format={(value) => `${value}`}
											padding={0}
										/>}
									/>
								}
							/>
						}
						xAxis={
							<LinearXAxis
								type="value"
								scaled={true}
								tickSeries={
									<LinearXAxisTickSeries
										line={<LinearXAxisTickLine position="center" />}
										label={<LinearXAxisTickLabel padding={3} />}
									/>
								}
							/>
						}
						series={
							<ScatterSeries
								point={
									<ScatterPoint
										symbol={({ metadata }) => {
											return (
												<circle
													cx="0"
													cy="0"
													r={metadata.duration / 100}
													style={{
														fill: theme.colors.blue['600'],
														stroke: theme.colors.blue['400'],
														strokeWidth: 1.0,
													}}
													onClick={(e) => {
														e.stopPropagation();
														setAlertDetails(metadata);
													}}
													cursor="pointer"
												/>
											);
										}}
										tooltip={
											<ChartTooltip
												followCursor={true}
												className={tooltipClassName}
												modifiers={{
													offset: '5px, 5px'
												}}
												content={({ id, metadata }:
													{ id: ChartDataShape['id'], metadata: typeof runs[0], y: ChartDataShape['data'] }
												) => (
													<TooltipTemplate
														className={tooltipClassName}
														value={{
															x: `${metadata.team1?.team.nickname} vs. ${metadata.team2?.team.nickname}`,
															y: `Run ${id} = ${metadata.length} results in ${metadata.duration}ms`,
														}}
													/>
												)}
											/>
										}
									/>
								}
							/>
						}
					/>
				)
			}
			<AlertDialog
				isOpen={!!alertDetails}
				leastDestructiveRef={alertCancelRef}
				onClose={onCloseAlert}
			>
				{alertDetails && (
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader
								fontSize="lg"
								fontWeight="bold"
							>
								{ alertDetails?.team1.team.nickname }
								{ ' vs ' }
								{ alertDetails?.team2.team.nickname }
							</AlertDialogHeader>
							<AlertDialogBody>
								<Box>
									Original run:
									{ ' ' }
									{ alertDetails?.length }
									{ ' ' }
									results in
									{ ' ' }
									{ renderSimRunDuration(alertDetails) }
									{ ' ' }
									ms
								</Box>
								<Text mt={4}>
									Would you like to run this sim again and show their common opponents result?
								</Text>
							</AlertDialogBody>
							<AlertDialogFooter>
								<Button
									ref={alertCancelRef}
									onClick={onCloseAlert}
								>
									Cancel
								</Button>
								<Button
									colorScheme="blue"
									onClick={onClickAlert}
									ml={3}
								>
									Yes, Run Again!
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				)}
			</AlertDialog>
		</Box>
	);
}

