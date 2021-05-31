import React, { useEffect } from 'react';
import { sagaActions } from '../../store/saga/saga';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { AutoSizer, List } from 'react-virtualized';
import { TEAMS_LIST_ROW_HEIGHT } from '../components/TeamsList';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import {
	Box, Heading,
	Spinner,
	Text,
	VStack,
} from '@chakra-ui/react';
import { resultsScreenRowRenderer } from './resultsScreenRowRenderer';
import { ResultsScreenHeader } from './ResultsScreenHeader';

/**
 * The results screen...obviously 😂
 */
export const ResultsScreen = () => {
	const dispatch = useAppDispatch()
	const { results, isLoading, levelMax } = useAppSelector((state) => state.sim);
	const { entities } = useAppSelector((state) => state.apiTeams.results);

	useEffect(() => {
		dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
	}, [dispatch]);

	function rowRenderer(props: ListRowProps) {
		return resultsScreenRowRenderer(props, results, entities);
	}

	return (
		<VStack minH={'100vh'}>
			<ResultsScreenHeader />
			<Box
				flexGrow={1}
				height={0} // this may seem odd but is a flexbox height fix hack for children
				width={'full'}
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
										<Heading size={'sm'}>
											No Common Opponents Found
										</Heading>
										<Text my={6}>
											Hey, it happens! Some teams simply have no common opponents within
											{ ' ' }
											{ levelMax }
											{ ' ' }
											degrees of separation. What are you going to do? 🤷
										</Text>
										<Text my={6}>
											2020 was also a weird year with fewer games per school
											and increased focus on intra-conference play.
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
									rowHeight={TEAMS_LIST_ROW_HEIGHT}
									rowRenderer={rowRenderer}
									width={width}
								/>
							)}
						</AutoSizer>
					)
				}
			</Box>
		</VStack>
	);
}
