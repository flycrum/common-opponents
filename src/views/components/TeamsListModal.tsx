import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiTeamsSelectors } from '../../store/slices/apiTeamsSlice';
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
import { TeamsListModalRow } from './TeamsListModalRow';
import { useHistory, useLocation } from 'react-router-dom';
import type { LocationState } from '../../types/LocationState';
import { setSimTeam1, setSimTeam2 } from '../../store/slices/simSlice';

/** The target height used for reach virtualized row and also used to oversize team logos **/
export const TEAMS_LIST_ROW_HEIGHT = 50;

/**
 * The virtualized list to display and allow for the selection of a team.
 */
export const TeamsListModal = () => {
	const location = useLocation<LocationState<1 | 2>>();
	const history = useHistory();
	const teams = useAppSelector(apiTeamsSelectors.selectAll);
	const { team1, team2 } = useAppSelector((state) => state.sim);
	const dispatch = useAppDispatch();
	/** Don't let team play against themself **/
	const selectedTeam = location.state.xtra === 1 ? team1 : team2;
	const otherTeam = location.state.xtra === 1 ? team2 : team1;

	function onClose () {
		history.goBack();
	}

	const setTeam = (team: ApiTeamsResponseTeamItem) => {
		dispatch(location.state.xtra === 1
			? setSimTeam1(team)
			: setSimTeam2(team)
		);

		onClose();
	};

	function getSuffix (team: ApiTeamsResponseTeamItem) {
		if (otherTeam === team) {
			return '(already selected)';
		} if (['Old Dominion', 'UConn'].includes(team.team.nickname)) {
			return '(DNP in 2020)';
		}
	}

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
					<TeamsListModalRow
						disableTeam={otherTeam === team}
						isAlreadySelected={selectedTeam === team}
						onClick={() => setTeam(team)}
						rowHeight={TEAMS_LIST_ROW_HEIGHT}
						suffix={getSuffix(team)}
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
								// todo: change to more reasonable number that doesn't include entire list
								// hack: this makes it possible to use '.focus' to scroll to previously selected team
								overscanRowCount={150}
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
