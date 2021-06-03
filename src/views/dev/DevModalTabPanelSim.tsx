import React from 'react';
import {
	Box,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { WarningBadge } from '../components/WarningBadge';
import { NegativeBadge } from '../components/NegativeBadge';
import { DevModalTabPanelSimChart } from './DevModalTabPanelSimChart';
import type { SimHistoryRunDetails } from '../../store/slices/simHistorySlice';
import { GenerateRunsButton } from '../components/GenerateRunsButton';

export const renderSimRunDuration = (runDetails: SimHistoryRunDetails) => (
	runDetails.duration < 200
		? runDetails.duration
		: runDetails.duration < 400
			? (
				<WarningBadge>
					{ runDetails.duration }
				</WarningBadge>
			)
			: (
				<NegativeBadge>
					{ runDetails.duration }
				</NegativeBadge>
			)
);

/**
 * The sim's panel within dev tools.
 */
export const DevModalTabPanelSim: React.FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const { runs } = useAppSelector((state) => state.simHistory);

	return (
		<Box height={'full'}>
			{!runs.length
				? (
					<>
						<Text
							mb={4}
							fontSize={'sm'}
							whiteSpace={'break-spaces'}
						>
							No results yet. Generate some quick results below or come back after running some searches 😁
						</Text>
						<GenerateRunsButton />
					</>
				)
				: (
					<>
						<Box
							position={'relative'}
							height={'full'}
							maxHeight={'280px'}
							mb={6}
						>
							<DevModalTabPanelSimChart
								isFull
								onCloseModal={onCloseModal}
							/>
						</Box>
						<Table
							size={'sm'}
							variant="striped"
						>
							<Thead>
								<Tr>
									<Th>
										Id
									</Th>
									<Th isNumeric>
										Run Duration
									</Th>
									<Th isNumeric>
										Results
									</Th>
									<Th>
										Matchup
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{runs.map((runDetails) => (
									<Tr key={runDetails.id}>
										<Td>
											{ runDetails.id }
										</Td>
										<Td isNumeric>
											{ renderSimRunDuration(runDetails) }
										</Td>
										<Td isNumeric>
											{ runDetails.length }
										</Td>
										<Td>
											{ runDetails.team1.team.nickname }
											{ ' ' }
											vs.
											{ ' ' }
											{ runDetails.team2.team.nickname }
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</>
				)
			}
		</Box>
	);
};

export const DevModalTabPanelSimTab = () => (
	<>
		Sim Runs
	</>
);
