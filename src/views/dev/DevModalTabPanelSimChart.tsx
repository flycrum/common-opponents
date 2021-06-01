import React from 'react';
import {
	ChartDataShape,
	Line,
	LinearXAxis,
	LinearXAxisTickLabel,
	LinearXAxisTickLine,
	LinearXAxisTickSeries,
	LinearYAxis,
	LineChart,
	LineSeries,
} from 'reaviz';
import theme from '../../theme';
import { useAppSelector } from '../../store/store';

export const DevModalTabPanelSimChart: React.FC = () => {
	const { runs } = useAppSelector((state) => state.simHistory);
	const data = runs.map((runDetails, index) => ({
		id: runDetails.id.toString(),
		key: index, // start with zero cause...well, this chart library doesn't document a lot of hows except storybook
		data: runDetails.duration,
	} as ChartDataShape));

	return (
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
				/>
			}
		/>
	);
}

