import { call, put, StrictEffect } from 'redux-saga/effects';
import { sagaActions } from './saga';
import store from '../store';
import { PATHWAY_DELIMITER } from '../../consts/PATHWAY_DELIMITER';
import { timeout } from '../../utils/timeoutPromise';
import { OpponentsLookupByTeam } from '../../types/OpponentsLookupByTeam';
import { addSimHistoryItem, SimHistoryRunDetails } from '../slices/simHistorySlice';
import { setSimFailedResults, setSimPendingResults, setSimResults } from '../slices/simSlice';
import type { SimResults } from '../slices/simSlice';

/**
 * A data node that represents the pathway of related opponents that potentially connects the target teams.
 *
 */
type SearchablePathwayNode = {
	/**
	 * Traversal path of opponent ids used to track paths, lookup individual points along the way.
	 * Note: we use a string here because making copies of it and searching within it for partial matches is cheap.
	 */
	pathway: string;
	/**
	 * The next/current/last opponent id in the pathway.
	 */
	nextTeamId: string;
}

/**
 * In-order traversal of team opponents lookup tables to find non-circular common opponents up to nth degree/level.
 * Note: this does not actually use a tree struct with nodes but virtually constructs a viable alternative.
 * [Tree traversal]{@link https://en.wikipedia.org/wiki/Tree_traversal}
 * @param targetOpponentId The id of the opponent that we're trying to find a match with (aka team2).
 * @param allTeamsOpponents Master lookup table for all the opponents a team directly played in the given year.
 * @param currentLevelPathwayNodes Nodes to search at the current level (as an array, in-order traversal is much easier!).
 * @param level The current search depth (0-based because we start with team1 alone in the first depth search).
 * @param levelMax The max depth the recursive search will go.
 * @param results
 // * @param nextDepthSiblings
 */
async function recursivelyFindCommonOpponents(
	targetOpponentId: string,
	allTeamsOpponents: OpponentsLookupByTeam,
	currentLevelPathwayNodes: SearchablePathwayNode[],
	level: number,
	levelMax: number,
	results: SimResults,
): Promise<SimResults> {
	const nextLevelPathwayNodes: SearchablePathwayNode[] = [];

	// iterate over the possible opponents pathways for this level
	for (const pathwayNode of currentLevelPathwayNodes) {
		// console.log(new Array(level * 4).join(' '), level, 'opponentId: ', pathwayNode.nextTeamId);
		if (pathwayNode.nextTeamId === targetOpponentId) {
			// ! FOUND COMMON OPPONENT !
			// console.log(' ! FOUND COMMON OPPONENT !')
			results.push({
				opponentsGames: [], // populate later
				pathway: pathwayNode.pathway,
				pathwayList: pathwayNode.pathway.split(PATHWAY_DELIMITER),
			});
			// skip to next iteration since we don't want to process children of already established connection
			// this is necessary to avoid redundant results like:
			// ex1: Alabama >> Notre Dame >> Alabama >> Notre Dame
			// ex2: Alabama >> Notre Dame >> Duke >> Notre Dame
			continue;
		}

		if (level < levelMax) {
			let nextTeamOpponents = allTeamsOpponents[pathwayNode.nextTeamId];

			for (const nestedOpponentId in nextTeamOpponents) {
				if (!pathwayNode.pathway.includes(`${PATHWAY_DELIMITER}${nestedOpponentId}${PATHWAY_DELIMITER}`)
					&& nextTeamOpponents.hasOwnProperty(nestedOpponentId)
				) {
					// console.log(new Array(level * 4).join(' '), level, '⎣ nestedOpponentId: ', nestedOpponentId);
					nextLevelPathwayNodes.push({
						// append to breadcrumbs of potential common opponents
						// add trailing delimiter to make it easier to accurately search on string without split or regex
						pathway: `${pathwayNode.pathway}${nestedOpponentId}${PATHWAY_DELIMITER}`,
						nextTeamId: nestedOpponentId,
					});
				}
			}
		}
	}

	// now that we have flattened list of the next levels pathway nodes
	if (nextLevelPathwayNodes.length) {
		// wait for timeout to break up thread blocking logic (not a perfect system, consider worker thread later)
		await timeout();
		// process next level of potential opponent matches
		await recursivelyFindCommonOpponents(
			targetOpponentId,
			allTeamsOpponents,
			nextLevelPathwayNodes,
			level + 1,
			levelMax,
			results,
		);
	}

	return results;
}

export function* findCommonOpponents(): Generator<
	StrictEffect, // yield
	void, // return
	any // accept
> {
	const state = store.getState();

	yield put({ type: `${sagaActions.FIND_COMMON_OPPONENTS}_PENDING` });
	yield put(setSimPendingResults());

	try {
		const startTime = Date.now();
		const { team1, team2, levelMax } = state.sim;
		const allTeamsOpponents = state.opponents;
		// todo - these bangs are bad!
		const processedTeamsLookup = new Set<string>();
		processedTeamsLookup.add(team1!.team.nickname);

		// kickoff recursive search
		let results: SimResults = yield call(recursivelyFindCommonOpponents,
			team2!.team.nickname,
			allTeamsOpponents,
			[{
				// pre-populate breadcrumbs with team1
				// include leading delimiter to more easily search for teams within string without using 'split'
				pathway: `${PATHWAY_DELIMITER}${team1!.team.nickname}${PATHWAY_DELIMITER}`,
				nextTeamId: team1!.team.nickname,
			}],
			0,
			levelMax,
			[],
		);

		// post-process and transform results
		results = results.map((resultItem) => {
			// split on the delimiter
			let pathwayList = resultItem.pathway.split(PATHWAY_DELIMITER)
			// remove leading delimiter
			pathwayList.shift();
			// remove trailing delimiter
			pathwayList.pop();

			resultItem.opponentsGames = pathwayList.reduce(
				(games, pathTeamId, index) => {
					// if not the last path (which is also the target team)
					if (index < pathwayList.length - 1) {
						const nextPathTeamId = pathwayList[index + 1];
						// push array of match-up games between two teams
						games.push(allTeamsOpponents[pathTeamId][nextPathTeamId]);
					}

					return games;
				},
				[] as typeof resultItem.opponentsGames,
			);
			resultItem.pathwayList = pathwayList;
			resultItem.pathway = pathwayList.join(PATHWAY_DELIMITER);

			return resultItem;
		});

		yield put(setSimResults(results));

		const simRunDetails: SimHistoryRunDetails = {
			duration: Date.now() - startTime,
			id: -1, // internally set
			length: results?.length ?? 0,
			team1: team1!,
			team2: team2!,
		}

		yield put(addSimHistoryItem(simRunDetails));
	} catch(e) {
		console.error(e);
		yield put(setSimFailedResults());
	}
}
