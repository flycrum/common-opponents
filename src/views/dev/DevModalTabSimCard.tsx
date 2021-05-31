import React from 'react';
import { DevModalTabCard } from './DevModalTabCard';
import { LineChart, LineSeries, PointSeries, ScatterPoint } from 'reaviz';
import theme from '../../theme';

export const singleDateData = [
	{ id: '0', key: new Date('2020-02-17T08:00:00.000Z'), data: 10 },
	{ id: '1', key: new Date('2020-02-21T08:00:00.000Z'), data: 18 },
	{ id: '2', key: new Date('2020-02-26T08:00:00.000Z'), data: 2 },
	{ id: '3', key: new Date('2020-02-29T08:00:00.000Z'), data: 10 }
];

export const DevModalTabSimCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	return (
		<DevModalTabCard
			heading={'Sim Runs'}
			onClick={onClick}
		>
			<LineChart
				data={singleDateData}
				series={
					<LineSeries
						colorScheme={theme.colors.blue['500']}
						symbols={
							<PointSeries
								show={true}
								point={
									<ScatterPoint

									/>
								}
							/>
						}
					/>
				}
			/>
		</DevModalTabCard>
	);
}

