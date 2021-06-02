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
	LineChart,
	LineSeries,
	PointSeries,
	ScatterPoint,
	TooltipArea,
	TooltipTemplate,
} from 'reaviz';
import theme from '../../theme';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useCss } from 'react-use';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay, Box,
	Button,
	Text,
} from '@chakra-ui/react';
import { setSimTeam1, setSimTeam2 } from '../../store/slices/simSlice';
import { routePaths } from '../../consts/routePaths';
import { useHistory } from 'react-router-dom';
import { renderSimRunDuration } from './DevModalTabPanelSim';

/**
 * Chart to display find opponent sim runs.
 * @todo Split up this overly complex component.
 */
export const DevModalTabPanelSimChart: React.FC<{ onCloseModal: () => void}> = ({ onCloseModal }) => {
	const dispatch = useAppDispatch();
	const { runs } = useAppSelector((state) => state.simHistory);
	const history = useHistory();
	const [ alertDetails, setAlertDetails ] = React.useState(null as null | typeof runs[0]);
	const alertCancelRef = React.useRef<HTMLButtonElement | null>(null);
	const tooltipClassName = useCss({
		'--color-tooltip': theme.colors.gray['700'], // background
		'--color-on-tooltip': theme.colors.white, // text color
		padding: '10px',
	});
	const data = runs.map((runDetails, index) => ({
		id: runDetails.id.toString(),
		key: index, // start with zero cause...well, this chart library doesn't document a lot of hows except storybook
		data: runDetails.duration,
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
		<>
			<LineChart
				data={data}
				yAxis={
					<LinearYAxis
						scaled={true}
						type="value"
						// axisLine={null}
						tickSeries={
							<LinearXAxisTickSeries
								line={<LinearXAxisTickLine position="center" />}
								label={<LinearXAxisTickLabel
									format={(value) => `${value}ms`}
									padding={0}
									// position={'start'}
								/>}
							/>
						}
					/>
				}
				xAxis={
					<LinearXAxis
						type="value"
						scaled={true}
						// axisLine={null}
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
														fill: theme.colors.blue['500'],
														stroke: theme.colors.blue['500'],
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
										content={({ id, metadata, y }:
											{ id: ChartDataShape['id'], metadata: typeof runs[0], y: ChartDataShape['data'] }
										) => (
											<TooltipTemplate
												className={tooltipClassName}
												value={{
													x: `${metadata.team1?.team.nickname} vs. ${metadata.team2?.team.nickname}`,
													y: `Run ${id} = ${metadata.length} results in ${y}ms`,
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
		</>
	);
}

