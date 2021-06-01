import React from 'react';
import { DevModalTabCard } from './DevModalTabCard';
import { DevModalTabPanelSimChart } from './DevModalTabPanelSimChart';
import { useAppSelector } from '../../store/store';
import { Text } from '@chakra-ui/react';

export const DevModalTabSimCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	const { runs } = useAppSelector((state) => state.simHistory);

	return (
		<DevModalTabCard
			heading={'Sim Runs'}
			onClick={onClick}
		>
			{!runs.length
				? (
					<Text
						fontSize={'sm'}
						whiteSpace={'break-spaces'}
					>
						No results yet. Come back after some runs 😁
					</Text>
				)
				: (
					<DevModalTabPanelSimChart />
				)
			}
		</DevModalTabCard>
	);
}

