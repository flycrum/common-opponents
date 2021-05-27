import React, { useState } from 'react';
import { TeamsList } from '../components/TeamsList';
import { GridItem, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { FaceoffScreenTeam } from './FaceoffScreenTeam';

/**
 * This is the primary select teams screen (home).
 */
export const FaceoffScreen = () => {
	const [ selectedTeam, setSelectedTeam ] = useState(null as 1 | 2 | null);
	const { team1, team2 } = useAppSelector((state) => state.sim);

	return (
		<>
			{!!selectedTeam
				? (
					<TeamsList
						teamOption={selectedTeam}
						onSelect={() => setSelectedTeam(null)}
					/>
				)
				: (
					<VStack
						minH={'100vh'}
						justifyContent={'center'}
					>
						<VStack spacing={8}>
							<Heading as="h3" size="lg">
								Common Opponents
							</Heading>
							<Text>
								{/* todo: 2 degrees? */}
								Select teams to find their common opponents...within 2 degrees of
								separation.
							</Text>
							<SimpleGrid
								width={'full'}
								columns={5}
							>
								<FaceoffScreenTeam
									colSpan={2}
									onClick={() => setSelectedTeam(1)}
									team={team1}
								/>
								{/*<GridItem colSpan={{base: 1, sm: 1}}>*/}
								<GridItem
									colSpan={1}
									textAlign={'center'}
								>
									vs.
								</GridItem>
								<FaceoffScreenTeam
									colSpan={2}
									onClick={() => setSelectedTeam(2)}
									team={team2}
								/>
							</SimpleGrid>
						</VStack>
					</VStack>
				)
			}
		</>
	);
}
