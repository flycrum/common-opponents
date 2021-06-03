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
import { DevSimChartContainer } from './DevSimChartContainer';
import { DevBulkRunsButton } from '../components/DevBulkRunsButton';
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeSimHistoryItem, simHistorySelectors } from '../../../store/slices/simHistorySlice';
import { renderSimRunDuration } from '../utils/renderSimRunDuration';

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
