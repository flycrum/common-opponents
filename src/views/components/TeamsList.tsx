import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiTeamsSelectors } from '../../store/slices/apiTeamsSlice';
import { simActions } from '../../store/slices/simSlice';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';
import {
	AutoSizer,
	List,
} from 'react-virtualized';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import { TeamsListRowButton } from './TeamsListRowButton';
import { useHistory, useLocation } from 'react-router-dom';
import type { LocationState } from '../../types/LocationState';

/** The target height used for reach virtualized row and also used to oversize team logos **/
export const TEAMS_LIST_ROW_HEIGHT = 50;

/**
 * The virtualized list to display and allow for the selection of a team.
 */
export const TeamsList = () => {
	const location = useLocation<LocationState<1 | 2>>();
	const history = useHistory();
	const teams = useAppSelector(apiTeamsSelectors.selectAll);
	const dispatch = useAppDispatch();

	function onClose () {
		history.goBack();
	}

	const setTeam = (team: ApiTeamsResponseTeamItem) => {
		dispatch(location.state.xtra === 1
			? simActions.setSimTeam1(team)
			: simActions.setSimTeam2(team)
		);

		onClose();
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
		<Modal
			onClose={onClose}
			size={'full'}
			isOpen={true}
			isCentered
			motionPreset={'none'}
		>
			<ModalOverlay />
			<ModalContent my={0}>
				<ModalCloseButton
					position={'absolute'}
					zIndex={1} // show above rest of modal content
				/>
				<ModalBody p={0}>
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
								rowCount={teams.length}
								rowHeight={TEAMS_LIST_ROW_HEIGHT}
								rowRenderer={rowRenderer}
								width={width}
							/>
						)}
					</AutoSizer>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
