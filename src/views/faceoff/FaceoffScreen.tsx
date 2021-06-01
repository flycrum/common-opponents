import React from 'react';
import {
	Box,
	ButtonGroup,
	GridItem,
	Heading,
	IconButton,
	SimpleGrid,
	Text,
	VStack
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FaceoffScreenTeam } from './FaceoffScreenTeam';
import {
	useHistory,
	useLocation,
} from 'react-router-dom';
import type { LocationState } from '../../types/LocationState';
import { routePaths } from '../../consts/routePaths';
import { FaDice } from 'react-icons/fa';
import { sagaActions } from '../../store/saga/saga';

/**
 * This is the primary select teams screen (home).
 * @todo this component is too large and complex
 */
export const FaceoffScreen = () => {
	const history = useHistory();
	const location = useLocation();
	const { levelMax, team1, team2 } = useAppSelector((state) => state.sim);
	const dispatch = useAppDispatch();

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
			<VStack
				spacing={10}
				padding={8}
			>
				<Heading
					as="h1"
					size="lg"
				>
					Common Opponents
				</Heading>
				<Text>
					Select teams to find their common opponents...within
					{ ' ' }
					{ levelMax }
					{ ' ' }
					degrees of separation.
				</Text>
				<SimpleGrid
					width={'full'}
					columns={5}
					pt={4}
				>
					<FaceoffScreenTeam
						colSpan={2}
						onClick={() => onClickShowTeamsList(1)}
						team={team1}
					/>
					<GridItem
						colSpan={1}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						onClick={() => {}}
					>
						<Text
							as="i"
							fontSize="l"
							userSelect={'none'}
						>
							vs.
						</Text>
					</GridItem>
					<FaceoffScreenTeam
						colSpan={2}
						onClick={() => onClickShowTeamsList(2)}
						team={team2}
					/>
				</SimpleGrid>
				<ButtonGroup
					variant="outline"
					width={'full'}
					alignItems={'center'}
					justifyContent={team1 && team2 ? 'space-between' : 'center'}
				>
					<Box
						visibility={team1 && team2 ? 'visible' : 'hidden'}
						width={'70px'}
					/>
					<IconButton
						p={'4'}
						size="lg"
						isRound
						colorScheme={'white'}
						onClick={() => dispatch({ type: sagaActions.RANDOM_SELECT_TEAMS })}
						icon={<FaDice />}
						aria-label={'Randomize teams'}
					/>
					<IconButton
						visibility={team1 && team2 ? 'visible' : 'hidden'}
						p={'4'}
						size="lg"
						isRound
						colorScheme={'yellow'}
						aria-label="Find common opponents"
						onClick={() => history.push({
							pathname: routePaths.RESULTS,
							search: `?team1=${team1!.team.id}&team2=${team2!.team.id}`,
							state: {}, // this is used to determine prior route
						})}
					>
						<span>
							GO!
						</span>
					</IconButton>
				</ButtonGroup>
			</VStack>
		</VStack>
	);
}
