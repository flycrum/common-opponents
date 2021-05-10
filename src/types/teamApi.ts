/**
 * The ESPN API response for FBS (group 80) team/school details.
 */
export type TeamApiResponse = {
	config: {[key: string]: any};
	data: {
		sports: {
			id: string; // "20"
			leagues: {
				abbreviation: string; // "NCAAF"
				id: string; // "23"
				name: string; // "NCAA - Football"
				shortName: string; // "NCAA Football"
				slug: string; // "college-football"
				teams: TeamApiResponseSchoolResult;
				uid: string; // "s:20~l:23"
			}[];
			name: string; // "Football"
			slug: string; //"football"
			uid: string; // "s:20"
		}[];
	};
	headers: {
		'cache-control': string; // "max-age=1"
		'content-length': string; // "973"
		'content-type': string; // "application/json;charset=UTF-8"
		expires: string; // "Mon, 10 May 2021 16:14:26 GMT"
		pragma: string; // "no-cache"
	};
	request: {
		readyState: number; // 4
		timeout: number; // 0
		withCredentials: boolean; // false
		upload: XMLHttpRequestUpload;
		onreadystatechange: () => {};
	};
	status: number; // 200
	statusText: string; // "OK"
};

/**
 * A list of the actual schedule results from MQL.
 */
type TeamApiResponseSchoolResult = TeamApiResponseSchoolResultItem[];

/**
 * Games within the schedule results.
 */
export type TeamApiResponseSchoolResultItem = {
	abbreviation: string; // "AUB"
	alternateColor: string; // "f1f2f3"
	color: string; // "03244d"
	displayName: string; // "Auburn Tigers"
	id: string; // "2"
	isActive: boolean; // true
	isAllStar: boolean; // false
	links: {
		href: string; // "https://www.espn.com/college-football/team/_/id/2/auburn-tigers"
		isExternal: boolean; // false
		isPremium: boolean; // false
		language: string; // "en-US"
		rel: ('desktop' | 'team' | string)[]; // ["clubhouse", "desktop", "team"]
		shortText: 'Awards' | 'Clubhouse' | 'photos' | 'Roster' | 'Schedule' | 'Scores' | 'Statistics' | 'Tickets';
		text: 'Awards' | 'Clubhouse' | 'photos' | 'Roster' | 'Schedule' | 'Scores' | 'Statistics' | 'Tickets';
	}[];
	location: string; // "Auburn"
	logos: {
		alt: string; // ""
		height: number; // 500
		href: string; // "https://a.espncdn.com/i/teamlogos/ncaa/500/2.png"
		rel: ('full' | 'default');
		width: number; // 500
	}[];
	name: string; // "Tigers"
	nickname: string; // "Auburn"
	record: {
		items: {
			stats: {
				name: string; // playoffSeed
				value: any; // 5
			}[];
			summary: string; // "6-5"
		}[];
	};
	shortDisplayName: string; // "Tigers"
	slug: string; // "auburn-tigers"
	uid: string; // "s:20~l:23~t:2"
};
