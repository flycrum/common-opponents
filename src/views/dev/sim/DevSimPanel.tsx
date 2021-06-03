import React from 'react';
import {
	Box,
	ButtonGroup,
	IconButton,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { WarningBadge } from '../../components/WarningBadge';
import { NegativeBadge } from '../../components/NegativeBadge';
import { DevSimChartContainer } from './DevSimChartContainer';
import { DevBulkRunsButton } from '../components/DevBulkRunsButton';
import { FaRegTrashAlt } from 'react-icons/fa';
import type { SimHistoryRunDetails } from '../../../types/SimHistoryRunDetails';
import { removeSimHistoryItem, simHistorySelectors } from '../../../store/slices/simHistorySlice';

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
export const DevSimPanel: React.FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const dispatch = useAppDispatch();
	const runs = useAppSelector(simHistorySelectors.selectAll);

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
						<DevBulkRunsButton />
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
							<DevSimChartContainer
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
									<Th isNumeric>
										Actions
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
										<Td isNumeric>
											<ButtonGroup>
												<IconButton
													size={'xs'}
													variant="outline"
													icon={<FaRegTrashAlt />}
													colorScheme="red"
													aria-label="Delete run item"
													onClick={() => dispatch(removeSimHistoryItem(runDetails.id))}
												/>
											</ButtonGroup>
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
