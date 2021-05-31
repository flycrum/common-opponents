import { call, put, StrictEffect } from 'redux-saga/effects';
import { sagaActions } from './saga';
import store from '../store';
import { simActions } from '../slices/simSlice';
import { BREADCRUMB_DELIMITER } from '../../consts/BREADCRUMB_DELIMITER';
import { timeout } from '../../utils/timeoutPromise';
import { OpponentsLookupByTeam } from '../../types/OpponentsLookupByTeam';

/**
 * A data node that represents the pathway of related opponents that potentially connects the target teams.
 *
 */
type SearchablePathwayNode = {
	/**
	 * Traversal path of opponent ids used to track paths, lookup individual points along the way.
	 * Note: we use a string here because making copies of it and searching within it for partial matches is cheap.
	 */
	breadcrumbIds: string;
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
 * @param allTeamOpponents Master lookup table for all the opponents a team directly played in the given year.
 * @param currentLevelPathwayNodes Nodes to search at the current level (as an array, in-order traversal is much easier!).
 * @param level The current search depth (0-based because we start with team1 alone in the first depth search).
 * @param levelMax The max depth the recursive search will go.
 * @param results
 // * @param nextDepthSiblings
 */
async function recursivelyFindCommonOpponents(
	targetOpponentId: string,
	allTeamOpponents: OpponentsLookupByTeam,
	currentLevelPathwayNodes: SearchablePathwayNode[],
	level: number,
	levelMax: number,
	results: string[],
): Promise<string[]> {
	const nextLevelPathwayNodes: SearchablePathwayNode[] = [];

	// iterate over the possible opponents pathways for this level
	for (const pathwayNode of currentLevelPathwayNodes) {
		// console.log(new Array(level * 4).join(' '), level, 'opponentId: ', oppBreadcrumb.opponentId);
		if (pathwayNode.nextTeamId === targetOpponentId) {
			// ! FOUND COMMON OPPONENT !
			results.push(pathwayNode.breadcrumbIds);
			// skip to next iteration since we don't want to process children of already established connection
			// this is necessary to avoid redundant results like:
			// ex1: Alabama >> Notre Dame >> Alabama >> Notre Dame
			// ex2: Alabama >> Notre Dame >> Duke >> Notre Dame
			continue;
		}

		if (level < levelMax) {
			let nextTeamOpponents = allTeamOpponents[pathwayNode.nextTeamId];

			for (const nestedOpponentId in nextTeamOpponents) {
				if (!pathwayNode.breadcrumbIds.includes(`${BREADCRUMB_DELIMITER}${nestedOpponentId}${BREADCRUMB_DELIMITER}`)
					&& nextTeamOpponents.hasOwnProperty(nestedOpponentId)
				) {
					// console.log(new Array(level * 4).join(' '), level, '⎣ nestedOpponentId: ', nestedOpponentId);
					nextLevelPathwayNodes.push({
						// append to breadcrumbs of potential common opponents
						// add trailing delimiter to make it easier to accurately search on string without split or regex
						breadcrumbIds: `${pathwayNode.breadcrumbIds}${nestedOpponentId}${BREADCRUMB_DELIMITER}`,
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
			allTeamOpponents,
			nextLevelPathwayNodes,
			level + 1,
			levelMax,
			results,
		);
	}

	// remove leading and trailing delimiters
	results = results.map((resultItem) => {
		// split on the delimiter
		let breadcrumbsList = resultItem.split(BREADCRUMB_DELIMITER)
		// remove leading delimiter
		breadcrumbsList.shift();
		// remove trailing delimiter
		breadcrumbsList.pop();

		return breadcrumbsList.join(BREADCRUMB_DELIMITER);
	});

	return results;
}

export function* findCommonOpponents(): Generator<
	StrictEffect, // yield
	void, // return
	any // accept
> {
	const state = store.getState();
	const { setResults, setPendingResults, setFailedResults } = simActions;

	yield put({ type: `${sagaActions.FIND_COMMON_OPPONENTS}_PENDING` });
	yield put(setPendingResults());

	try {
		const { team1, team2, levelMax } = state.sim;
		const allTeamSchedules = state.opponents;
		// todo - these bangs are bad!
		const processedTeamsLookup = new Set<string>();
		processedTeamsLookup.add(team1!.team.nickname);

		console.log('start search');
		const start = Date.now();

		// kickoff recursive search
		const results = yield call(recursivelyFindCommonOpponents,
			team2!.team.nickname,
			allTeamSchedules,
			[{
				// pre-populate breadcrumbs with team1
				// include leading delimiter to more easily search for teams within string without using 'split'
				breadcrumbIds: `${BREADCRUMB_DELIMITER}${team1!.team.nickname}${BREADCRUMB_DELIMITER}`,
				nextTeamId: team1!.team.nickname,
			}],
			0,
			levelMax,
			[],
		);

		console.log('results took: ', (Date.now() - start) / 1000);

		yield put(setResults(results));
	} catch(e) {
		yield put(setFailedResults());
	}
}
