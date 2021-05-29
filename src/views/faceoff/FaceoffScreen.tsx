import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	GridItem,
	Heading,
	IconButton,
	SimpleGrid,
	Text,
	Tooltip,
	VStack
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { FaceoffScreenTeam } from './FaceoffScreenTeam';
import {
	useHistory,
	useLocation,
} from 'react-router-dom';
import type { LocationState } from '../../types/LocationState';
import { routePaths } from '../../consts/routePaths';
import { FaDice } from 'react-icons/fa';

/**
 * This is the primary select teams screen (home).
 * @todo this component is too large and complex
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
						<Text
							as="i"
							fontSize="l"
							userSelect={'none'}
						>
							vs
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
					<Tooltip
						label="Randomize teams"
						openDelay={1000}
					>
						<IconButton
							p={'4'}
							size="lg"
							isRound
							colorScheme={'white'}
							onClick={() => {}}
							icon={<FaDice />}
							aria-label={'Randomize teams'}
						/>
					</Tooltip>
					{team1 && (
						<Tooltip
							label="Find common opponents"
							openDelay={1000}
						>
							<IconButton
								p={'4'}
								size="lg"
								isRound
								colorScheme={'yellow'}
								aria-label="Find common opponents"
								onClick={() => history.push(routePaths.RESULTS)}
							>
								<span>
									GO!
								</span>
							</IconButton>
						</Tooltip>
					)}
				</ButtonGroup>
			</VStack>
		</VStack>
	);
}
