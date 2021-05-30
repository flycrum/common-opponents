import React, { useEffect } from 'react';
import { sagaActions } from '../../store/saga/saga';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BREADCRUMB_DELIMITER } from '../../consts/BREADCRUMB_DELIMITER';
import { AutoSizer, List } from 'react-virtualized';
import { TEAMS_LIST_ROW_HEIGHT } from '../components/TeamsList';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import {
	Box,
	Heading,
	HStack,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';

/**
 * The results screen...obviously 😂
 */
export const ResultsScreen = () => {
	const dispatch = useAppDispatch()
	const { results } = useAppSelector((state) => state.sim);
	const { entities } = useAppSelector((state) => state.apiTeams.results);

	useEffect(() => {
		dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
	}, [dispatch]);

	function getLogoUrl(teamId: string) {
		return entities[teamId]?.team.logos[0]?.href;
	}

	function rowRenderer({ key, index, style }: ListRowProps) {
		const resultItem = results?.[index];

		if (!resultItem) {
			return null;
		}

		return (
			<div key={key} style={style}>
				<HStack key={resultItem}>
					{resultItem.split(BREADCRUMB_DELIMITER).map((teamId) => (
						<Image
							key={teamId}
							width={50}
							height={50}
							src={getLogoUrl(teamId)}
						/>
					))}
				</HStack>
			</div>
		);
	}

	if (!results?.length) {
		return (
			<Text>
				No results
			</Text>
		);
	}

	return (
		<VStack minH={'100vh'}>
			<Heading>
				Results
			</Heading>
			<Box
				flexGrow={1}
				width={'full'}
			>
				{/*// One word of caution about using AutoSizer with flexbox containers.*/}
				{/*// Flex containers don't prevent their children from growing and AutoSizer greedily*/}
				{/*// grows to fill as much space as possible. Combining the two can cause a loop.*/}
				{/*// The simple way to fix this is to nest AutoSizer inside of a block element*/}
				{/*// (like a <div>) rather than putting it as a direct child of the flex container.*/}
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
			</Box>
		</VStack>
	);
}
