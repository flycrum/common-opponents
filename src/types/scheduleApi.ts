/**
 * The MQL response for scraping and returning general & schedule api results.
 */
export type ScheduleApiResponse = {
	data: {
		author: string | null;
		date: string; // "2021-05-09T11:18:37.000Z"
		description: string | null; // "2020 Schedule and Results"
		image: {
			url: string;
			type: "png" | string;
			size: number; // 12135,
			size_pretty: string; // "12.1 kB"
			height: number; // 228,
			width: number; // 228
		};
		lang: "en" | string;
		logo: string | null;
		publisher: string | null;
		schedule: ScheduleApiResponseScheduleResult;
		title: string | null; // "2020 Schedule and Results | College Football at Sports-Reference.com"
		url: string; // "https://www.sports-reference.com/cfb/years/2020-schedule.html"
	};
	headers: {
		[key: string]: any;
		age: string,
		'x-cache': string,
	};
	response: {
		body: any;
		headers: {[key: string]: any};
		url: string;
		statusCode: 200 | number;
		statusMessage: "" | string;
	};
	status: "success" | string;
	statusCode: 200 | number;
};

/**
 * A list of the actual schedule results from MQL.
 */
type ScheduleApiResponseScheduleResult = ScheduleApiResponseScheduleResultItem[];

/**
 * Games within the schedule results.
 */
export type ScheduleApiResponseScheduleResultItem = {
	atLoser: '@' | string | null;
	boxscoreUrl: string | null; // "https://www.sports-reference.com/cfb/boxscores/2020-09-03-alabama-birmingham.html"
	date: string | null; // "Sep 3, 2020"
	notes: string | null;
	teamLoserName: string | null; // "Central Arkansas"
	teamLoserPoints: number | null; // 35
	teamWinnerName: string | null; // "Alabama-Birmingham"
	teamWinnerPoints: number | null; // 45
};

/**
 * An object type with the keys locked to the custom MQL query 'attr' names & the value assigned to generic param.
 */
export type KeyOfScheduleApiResponseScheduleResultItem<V> = {
	[key in keyof ScheduleApiResponseScheduleResultItem]: V;
};
