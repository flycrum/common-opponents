import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiTeamsSelectors } from '../../store/apiTeamsSlice';
import { simActions } from '../../store/simSlice';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';

interface Props {
	teamOption: 1 | 2;
}

/**
 * A select component for the list of all teams.
 */
	const teams = useAppSelector(apiTeamsSelectors.selectAll);
	const { team1, team2 } = useAppSelector((state) => state.sim);
	const dispatch = useAppDispatch();
	const borderImageSource = teamOption === 1
		? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))'
		: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))';
	const setTeam = (team: ApiTeamsResponseTeamItem) => {
		dispatch(teamOption === 1
			? simActions.setSimTeam1(team)
			: simActions.setSimTeam2(team)
		);
	};

				<Box
					key={team.team.id}
					// pad="small"
					height={{ min: 'auto' }}
					style={{
						borderImageSource,
						borderImageSlice: 1,
						// standardize scrollbars
						direction: 'ltr',
					}}
				>
						onClick={() => setTeam(team)}
						teamOption={teamOption}
				</Box>
	);
}

);

