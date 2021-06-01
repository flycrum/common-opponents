import React from 'react';
import {
	Box,
	Button,
	Table,
	Tbody,
	Td, Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { WarningBadge } from '../components/WarningBadge';
import { NegativeBadge } from '../components/NegativeBadge';
import { DevModalTabPanelSimChart } from './DevModalTabPanelSimChart';
import { FaRegTrashAlt } from 'react-icons/fa';
import { clearSimHistory } from '../../store/slices/simHistorySlice';

/**
 * The sim's panel within dev tools.
 */
export const DevModalTabPanelSim = () => {
	const { runs } = useAppSelector((state) => state.simHistory);
	const dispatch = useAppDispatch();

	return (
		<Box height={'full'}>
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
					<>
						<Box
							position={'relative'}
							height={'full'}
							maxHeight={'200px'}
						>
							<DevModalTabPanelSimChart />
							<Button
								position={'absolute'}
								top={0}
								right={0}
								mt={-2}
								size={'xs'}
								variant="outline"
								leftIcon={<FaRegTrashAlt />}
								colorScheme="red"
								onClick={() => dispatch(clearSimHistory())}
							>
								Clear Runs
							</Button>
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
											{runDetails.duration < 200
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
												}
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

DevModalTabPanelSim.Tab = () => (
	<>
		Sim Runs
	</>
);
