import React from 'react';
import {
	Box,
	HStack,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { PositiveBadge } from '../components/PositiveBadge';
import { NeutralBadge } from '../components/NeutralBadge';
import { DevModalTabCard } from './DevModalTabCard';

/**
 * The APIs panel within dev tools.
 */
export const DevModalTabPanelApis = () => {
	const { loadedSources } = useAppSelector((state) => state.initialData);

	return (
		<Table
			size={'sm'}
			variant="striped"
		>
			<Thead>
				<Tr>
					<Th>
						Name
					</Th>
					<Th>
						Provider
					</Th>
					<Th>
						Source
					</Th>
					<Th>
						No. Results
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>
						apiTeams
					</Td>
					<Td>
						espn.com
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiTeams'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<PositiveBadge>
							{ loadedSources['apiTeams'].length }
						</PositiveBadge>
					</Td>
				</Tr>
				<Tr>
					<Td>
						apiGames
					</Td>
					<Td>
						sports-reference.com
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiGames'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<PositiveBadge>
							{ loadedSources['apiGames'].length }
						</PositiveBadge>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}

DevModalTabPanelApis.Tab = () => (
	<>
		APIs
	</>
);

export const DevModalTabApisGamesCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	const { loadedSources } = useAppSelector((state) => state.initialData);
	const stage = 'apiGames';

	return (
		<DevModalTabCard
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
				<NeutralBadge>
					{ loadedSources[stage].source }
				</NeutralBadge>
			</HStack>
		</DevModalTabCard>
	);
}

export const DevModalTabApisTeamsCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	const { loadedSources } = useAppSelector((state) => state.initialData);
	const stage = 'apiTeams';

	return (
		<DevModalTabCard
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
				<NeutralBadge>
					{ loadedSources[stage].source }
				</NeutralBadge>
			</HStack>
		</DevModalTabCard>
	);
}
