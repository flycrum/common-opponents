import type { ApiTeamsResponseTeamItem } from './apiTeams';

/**
 * Details for dev tools sim history dataset.
 */
export type SimHistoryRunDetails = {
	/** how long it took to generate the common opponent results **/
	duration: number;
	/** the unique id of the run **/
	id: number;
	/** the number of results **/
	length: number;
	/** first opponent searched **/
	team1: ApiTeamsResponseTeamItem,
	/** second opponent searched **/
	team2: ApiTeamsResponseTeamItem,
};
