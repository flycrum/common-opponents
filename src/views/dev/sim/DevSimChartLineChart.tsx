import React from 'react';
import {
	ChartDataShape,
	ChartTooltip, Line,
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
	ScatterPoint,
	TooltipArea,
	TooltipTemplate,
} from 'reaviz';
import theme from '../../../theme';
import type { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';

interface Props {
	data: React.ComponentProps<typeof LineChart>['data'];
	setAlertDetails: (details: null | SimHistoryRunDetails) => void;
	tooltipClassName: string;
}

export const DevSimChartLineChart: React.FC<Props> = ({
	data,
	setAlertDetails,
	tooltipClassName,
}) => {
	return (
		<LineChart
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

