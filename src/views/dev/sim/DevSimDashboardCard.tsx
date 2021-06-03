import React from 'react';
import { DevDashboardCard } from '../components/DevDashboardCard';
import { DevSimChartContainer } from './DevSimChartContainer';
import { useAppSelector } from '../../../store/store';
import { Box, Text } from '@chakra-ui/react';

export const DevSimDashboardCard: React.FC<{onClick: () => void, onCloseModal: () => void}> = ({ onClick, onCloseModal }) => {
	const { runs } = useAppSelector((state) => state.simHistory);

	return (
		<DevDashboardCard
			heading={'Sim Runs'}
			onClick={onClick}
		>
			{!runs.length
				? (
					<>
						<Box>
							<Text
								mb={2}
								fontSize={'sm'}
								whiteSpace={'break-spaces'}
							>
								No results yet.
							</Text>
						</Box>
						<Text
							fontSize={'sm'}
							whiteSpace={'break-spaces'}
						>
							Click here to check out more details and bulk generation options.
						</Text>
					</>
				)
				: (
					<DevSimChartContainer
						isFull={false}
						onCloseModal={onCloseModal}
					/>
				)
			}
		</DevDashboardCard>
	);
}

