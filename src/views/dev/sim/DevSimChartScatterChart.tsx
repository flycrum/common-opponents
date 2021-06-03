import React from 'react';
import {
	ChartDataShape,
	ChartTooltip,
	LinearXAxis,
	LinearXAxisTickLabel,
	LinearXAxisTickLine,
	LinearXAxisTickSeries,
	LinearYAxis,
	LinearYAxisTickLabel,
	LinearYAxisTickLine,
	LinearYAxisTickSeries,
	ScatterPlot,
	ScatterPoint,
	ScatterSeries,
	TooltipTemplate,
} from 'reaviz';
import theme from '../../../theme';
import type { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';

interface Props {
	data: React.ComponentProps<typeof ScatterPlot>['data'];
	setAlertDetails: (details: null | SimHistoryRunDetails) => void;
	tooltipClassName: string;
}

export const DevSimChartScatterChart: React.FC<Props> = ({
	data,
	setAlertDetails,
	tooltipClassName,
}) => {
	return (
		<ScatterPlot
			data={data}
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
										// limit size of bubbles
										r={Math.min(30, metadata.duration / 20)}
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
										{
											id: ChartDataShape['id'],
											metadata: SimHistoryRunDetails,
											y: ChartDataShape['data'],
										}
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
	);
}

