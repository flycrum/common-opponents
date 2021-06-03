import React from 'react';
import theme from '../../../theme';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useBoolean, useCss } from 'react-use';
import { Box } from '@chakra-ui/react';
import { setSimTeam1, setSimTeam2 } from '../../../store/slices/simSlice';
import { routePaths } from '../../../consts/routePaths';
import { useHistory } from 'react-router-dom';
import { clearSimHistory, simHistorySelectors } from '../../../store/slices/simHistorySlice';
import { DevSimChartScatterChart } from './DevSimChartScatterChart';
import { DevSimChartLineChart } from './DevSimChartLineChart';
import type { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';
import type { ChartDataShape } from 'reaviz';
import { DevSimChartHeader } from './DevSimChartHeader';
import { DevSimChartRerunAlertDialog } from './DevSimChartRerunAlertDialog';

/**
 * Container of data sources and actions for simple/dumb child components.
 */
export const DevSimChartContainer: React.FC<{ isFull: boolean, onCloseModal: () => void}> = ({ isFull, onCloseModal }) => {
	const dispatch = useAppDispatch();
	const runs = useAppSelector(simHistorySelectors.selectAll);
	const history = useHistory();
	const [ isShowingChartLine, toggleChartType ] = useBoolean(true);
	const [ alertDetails, setAlertDetails ] = React.useState(null as null | SimHistoryRunDetails);
	const alertCancelRef = React.useRef<HTMLButtonElement | null>(null);
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
	const tooltipClassName = useCss({
		'--color-tooltip': theme.colors.gray['600'], // background
		'--color-on-tooltip': theme.colors.white, // text color
		padding: '10px',
	});

	const dispatchClearSimHistory = () => {
		dispatch(clearSimHistory());
	}

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

	const onCloseAlert = () => {
		setAlertDetails(null);
	};

	return (
		<Box
			height={'full'}
			width={'full'}
			pointerEvents={isFull ? 'auto' : 'none'}
		>
			{isFull && (
				<DevSimChartHeader
					dispatchClearSimHistory={dispatchClearSimHistory}
					isShowingChartLine={isShowingChartLine}
					toggleChartType={toggleChartType}
				/>
			)}
			{isShowingChartLine
				? (
					<DevSimChartLineChart
						data={dataLine}
						setAlertDetails={setAlertDetails}
						tooltipClassName={tooltipClassName}
					/>
				)
				: (
					<DevSimChartScatterChart
						data={dataScatter as any}
						setAlertDetails={setAlertDetails}
						tooltipClassName={tooltipClassName}
					/>
				)
			}
			<DevSimChartRerunAlertDialog
				alertCancelRef={alertCancelRef}
				alertDetails={alertDetails}
				onClickAlert={onClickAlert}
				onCloseAlert={onCloseAlert}
			/>
		</Box>
	);
}

