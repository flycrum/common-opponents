import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiTeamsSelectors } from '../../store/apiTeamsSlice';
import { simActions } from '../../store/simSlice';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import { Box } from '@chakra-ui/react';
import {
	AutoSizer,
	List,
} from 'react-virtualized';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import { TeamsListRowButton } from './TeamsListRowButton';

/** The target height used for reach virtualized row and also used to oversize team logos **/
export const TEAMS_LIST_ROW_HEIGHT = 50;

export interface TeamsListProps {
	onSelect: () => void;
	teamOption: 1 | 2;
}

/**
 * The virtualized list to display and allow for the selection of a team.
 * @param onSelect callback for when a team is selected
 * @param teamOption the team being selected (first or second)
 */
export const TeamsList = ({
	onSelect,
	teamOption,
}: TeamsListProps) => {
	const teams = useAppSelector(apiTeamsSelectors.selectAll);
	const dispatch = useAppDispatch();
	// const borderImageSource = teamOption === 1
	// 	? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))'
	// 	: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))';
	const setTeam = (team: ApiTeamsResponseTeamItem) => {
		dispatch(teamOption === 1
			? simActions.setSimTeam1(team)
			: simActions.setSimTeam2(team)
		);
		onSelect();
	};

	function rowRenderer({ key, index, style }: ListRowProps) {
		const team = teams[index];

		return (
			<div key={key} style={style}>
				<Box
					key={team.team.id}
					height={{ min: 'auto' }}
					borderTopWidth={'thin'}
					style={{
						borderImageSource: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))',
						borderImageSlice: 1,
					}}
				>
					<TeamsListRowButton
						onClick={() => setTeam(team)}
						rowHeight={TEAMS_LIST_ROW_HEIGHT}
						team={team}
					/>
				</Box>
			</div>
		);
	}

	return (
		// One word of caution about using AutoSizer with flexbox containers.
		// Flex containers don't prevent their children from growing and AutoSizer greedily
		// grows to fill as much space as possible. Combining the two can cause a loop.
		// The simple way to fix this is to nest AutoSizer inside of a block element
		// (like a <div>) rather than putting it as a direct child of the flex container.
		// <div style={{ width: '100%', height: '100%' }}>
			<AutoSizer>
				{({height, width}) => (
					<List
						height={height}
						overscanRowCount={20}
						rowCount={teams.length}
						rowHeight={TEAMS_LIST_ROW_HEIGHT}
						rowRenderer={rowRenderer}
						width={width}
					/>
				)}
			</AutoSizer>
		// </div>
	);
}
