import type { ApiGamesResponseEventResultItem } from './apiGames';

/**
 * Team's schedule stored by opponent id for easy lookup.
 * @example
 * {
 *		Air Force: {…},
 *		Akron: {…},
 *		Alabama: {
 *	    	Arkansas: [{…}],
 *			Auburn: [{
 *				atLoser: null
 *				boxscoreUrl: "https://www.sports-reference.com/cfb/boxscores/2020-11-28-alabama.html"
 *				date: "Nov 28, 2020"
 *				notes: null
 *				teamLoserName: "(22) Auburn"
 *				teamLoserPoints: 13
 *				teamWinnerName: "(1) Alabama"
 *				teamWinnerPoints: 42
 *			}],
 *			Florida:  [{…}],
 *			...,
 *		},
 *		Appalachian St: {…},
 *		...,
 * }
 */
export type OpponentsLookupByTeam = {
	[teamId: string]: {[oppTeamId: string]: ApiGamesResponseEventResultItem[]};
};
