import React from 'react';
import { Button, GridItem, Heading, IconButton, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { FaceoffScreenTeam } from './FaceoffScreenTeam';
import {
	useHistory,
	useLocation,
} from 'react-router-dom';
import type { LocationState } from '../../types/LocationState';
import { routePaths } from '../../consts/routePaths';

/**
 * This is the primary select teams screen (home).
 */
export const FaceoffScreen = () => {
	const history = useHistory();
	const location = useLocation();
	const { team1, team2 } = useAppSelector((state) => state.sim);

	function onClickShowTeamsList (teamOption: 1 | 2) {
		const state: Partial<LocationState<1 | 2>> = {
			modalBackLocation: location,
			xtra: teamOption,
		};

		history.push({
			pathname: routePaths.TEAM_SELECT_MODAL,
			// search: '?team1=abc',
			state,
		});
	}

	return (
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
						// onClick={() => setSelectedTeam(1)}
						onClick={() => onClickShowTeamsList(1)}
						team={team1}
					/>
					{/*<GridItem colSpan={{base: 1, sm: 1}}>*/}
					<GridItem
						colSpan={1}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						onClick={() => {}}
					>
						{team1 && team2
							? (
								<IconButton
									p={'4'}
									size="lg"
									isRound
									colorScheme={'yellow'}
									aria-label="Search"
								>
									<span>
										FIND!
									</span>
								</IconButton>
							)
							: (
								<Text
									as="i"
									fontSize="l"
									userSelect={'none'}
								>
									vs.
								</Text>
							)
						}
					</GridItem>
					<FaceoffScreenTeam
						colSpan={2}
						onClick={() => onClickShowTeamsList(2)}
						team={team2}
					/>
				</SimpleGrid>
			</VStack>
		</VStack>
	);
}
