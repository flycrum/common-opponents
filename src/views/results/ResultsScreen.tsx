import React, { useEffect } from 'react';
import { sagaActions } from '../../store/saga/saga';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { AutoSizer, List } from 'react-virtualized';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import {
	Box,
	Heading,
	Spinner,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import { resultsScreenRowRenderer } from './resultsScreenRowRenderer';
import { ResultsScreenHeader } from './ResultsScreenHeader';
import { useHistory, useLocation } from 'react-router-dom';
import { setSimTeam1, setSimTeam2 } from '../../store/slices/simSlice';

/**
 * The results screen...obviously 😂
 */
export const ResultsScreen = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useAppDispatch()
	const {
		isLoading,
		levelMax,
		results,
		team1,
		team2,
	} = useAppSelector((state) => state.sim);
	const { entities } = useAppSelector((state) => state.apiTeams.results);
	const { colorMode } = useColorMode();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search ?? '');
		const queryParamTeam1 = queryParams.get('team1');
		const queryParamTeam2 = queryParams.get('team2');

		// check query string params
		if (team1?.team.id !== queryParamTeam1 || team2?.team.id !== queryParamTeam2) {
			const teamsList = Object.values(entities);
			const foundTeam1 = teamsList.find((team) => team?.team.id === queryParamTeam1);
			const foundTeam2 = teamsList.find((team) => team?.team.id === queryParamTeam2);

			if (foundTeam1 && foundTeam2) {
				dispatch(setSimTeam1(foundTeam1));
				dispatch(setSimTeam2(foundTeam2));
			}
			else {
				if (location.state) {
					history.goBack();
				} else {
					history.push('/');
				}

				// must break out before dispatching to find opponents
				return;
			}
		}

		dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
	}, [team1, team2, entities, dispatch, location.search, location.state, history]);

	function rowRenderer(props: ListRowProps) {
		return resultsScreenRowRenderer(props, results, entities, colorMode);
	}

	return (
		<VStack minH={'100vh'}>
			<ResultsScreenHeader />
			<Box
				flexGrow={1}
				height={0} // this may seem odd but is a flexbox height fix hack for children
				width={'full'}
				style={{
					marginTop: '0',
				}}
			>
				{!results?.length
					? (
						<VStack
							alignItems={'center'}
							justifyContent={'center'}
							height={'full'}
						>
							{isLoading
								? (
									<Spinner
										thickness="4px"
										speed="0.65s"
										emptyColor="gray.200"
										color="yellow.500"
										size="xl"
									/>
								)
								: (
									<Box
										maxWidth={'480px'}
										textAlign={'center'}
									>
										<Heading size={'md'}>
											No Common Opponents Found
										</Heading>
										<Text my={6}>
											Looks like the
											{ ' ' }
											<strong>
												{ team1?.team.nickname }
											</strong>
											{ ' ' }
											and
											{ ' ' }
											<strong>
												{ team2?.team.nickname }
											</strong>
											{ ' ' }
											didn't play a schedule where a close relationship could be found.
										</Text>
										<Text my={6}>
											Hey, it happens! Some teams simply don't have common opponents within
											{ ' ' }
											{ levelMax }
											{ ' ' }
											degrees of separation. What are you going to do? 🤷
										</Text>
										<Text my={6}>
											2020 was also a weird year with fewer games per school
											and an increased focus on intra-conference play.
										</Text>
									</Box>
								)
							}
						</VStack>
					)
					: (
						// One word of caution about using AutoSizer with flexbox containers.
						// Flex containers don't prevent their children from growing and AutoSizer greedily
						// grows to fill as much space as possible. Combining the two can cause a loop.
						// The simple way to fix this is to nest AutoSizer inside of a block element
						// (like a <div>) rather than putting it as a direct child of the flex container.
						<AutoSizer>
							{({height, width}) => (
								<List
									height={height}
									overscanRowCount={20}
									rowCount={results?.length ?? 0}
									rowHeight={60}
									rowRenderer={rowRenderer}
									width={width}
									style={{
										padding: '20px',
									}}
								/>
							)}
						</AutoSizer>
					)
				}
			</Box>
		</VStack>
	);
}
