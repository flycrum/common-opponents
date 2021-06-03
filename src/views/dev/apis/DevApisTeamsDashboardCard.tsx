import React from 'react';
import {
	Box, Checkbox,
	HStack,
} from '@chakra-ui/react';
import store, { useAppSelector } from '../../../store/store';
import { PositiveBadge } from '../../components/PositiveBadge';
import { NeutralBadge } from '../../components/NeutralBadge';
import { DevDashboardCard } from '../components/DevDashboardCard';
import { getOptionsUseMockApiTeams } from '../../../store/storeHelpers';

export const DevModalTabApisTeamsCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	const { loadedSources } = useAppSelector((state) => state.initialData);
	const stage = 'apiTeams';

	return (
		<DevDashboardCard
			heading={`APIs / ${stage}`}
			onClick={onClick}
		>
			<HStack alignItems={'center'}>
				<PositiveBadge>
					{ loadedSources[stage].length }
				</PositiveBadge>
				<Box as="span" color="gray.500" fontSize="sm">
					results via
				</Box>
			</HStack>
			<HStack alignItems={'center'}>
				<NeutralBadge>
					{ loadedSources[stage].source }
				</NeutralBadge>
				<Box as="span" color="gray.500" fontSize="sm">
					source
				</Box>
			</HStack>
			<HStack alignItems={'center'}>
				<Checkbox
					defaultIsChecked={!!getOptionsUseMockApiTeams(store.getState())}
					isDisabled
				/>
				<Box as="span" color="gray.500" fontSize="sm">
					use mock data
				</Box>
			</HStack>
		</DevDashboardCard>
	);
}
