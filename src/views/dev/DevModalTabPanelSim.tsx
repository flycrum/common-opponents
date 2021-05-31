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
import { SuccessBadge } from '../components/SuccessBadge';
import { NeutralBadge } from '../components/NeutralBadge';
import { DevModalTabCard } from './DevModalTabCard';

/**
 * The sim's panel within dev tools.
 */
export const DevModalTabPanelSim = () => {
	const { loadedSources } = useAppSelector((state) => state.initialData);

	return (
		<Table variant="striped">
			<Thead>
				<Tr>
					<Th>
						TBD Header
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>
						TBD Data
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}

DevModalTabPanelSim.Tab = () => (
	<>
		Sim Runs
	</>
);
