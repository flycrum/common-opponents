import type { ApiTeamsResponse } from '../types/apiTeams';

export function mockApiTeams(..._args: []): ApiTeamsResponse {
	return {
		"data":
			{
				"sports":
					[{
						"id": "20", "uid": "s:20", "name": "Football", "slug": "football", "leagues": [{
							"id": "23",
							"uid": "s:20~l:23",
							"name": "NCAA - Football",
							"abbreviation": "NCAAF",
							"shortName": "NCAA Football",
							"slug": "college-football",
							"teams": [{
								"team": {
									"id": "2005",
									"uid": "s:20~l:23~t:2005",
									"slug": "air-force-falcons",
									"location": "Air Force",
									"name": "Falcons",
									"nickname": "Air Force",
									"abbreviation": "AFA",
									"displayName": "Air Force Falcons",
									"shortDisplayName": "Falcons",
									"color": "004a7b",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2005.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2005.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-3",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 146
											}, {"name": "pointsAgainst", "value": 90}, {
												"name": "avgPointsFor",
												"value": 24.33333396911621
											}, {"name": "avgPointsAgainst", "value": 15}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 56}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2005/air-force-falcons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2005/air-force-falcons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2005",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2005",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2005",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2005",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2005&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2005",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/air-force-falcons-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2006",
									"uid": "s:20~l:23~t:2006",
									"slug": "akron-zips",
									"location": "Akron",
									"name": "Zips",
									"nickname": "Akron",
									"abbreviation": "AKR",
									"displayName": "Akron Zips",
									"shortDisplayName": "Zips",
									"color": "00285e",
									"alternateColor": "84754e",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2006.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2006.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-5",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.1666666716337204
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 103
											}, {"name": "pointsAgainst", "value": 248}, {
												"name": "avgPointsFor",
												"value": 17.16666603088379
											}, {"name": "avgPointsAgainst", "value": 41.33333206176758}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -145}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.20000000298023224
											}, {
												"name": "leagueWinPercent",
												"value": 0.1666666716337204
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2006/akron-zips",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2006/akron-zips",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2006",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2006",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2006",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2006",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2006&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2006",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/akron-zips-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "333",
									"uid": "s:20~l:23~t:333",
									"slug": "alabama-crimson-tide",
									"location": "Alabama",
									"name": "Crimson Tide",
									"nickname": "Alabama",
									"abbreviation": "ALA",
									"displayName": "Alabama Crimson Tide",
									"shortDisplayName": "Crimson Tide",
									"color": "690014",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/333.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "13-0",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 13
											}, {"name": "losses", "value": 0}, {
												"name": "winPercent",
												"value": 1
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 13}, {
												"name": "pointsFor",
												"value": 630
											}, {"name": "pointsAgainst", "value": 252}, {
												"name": "avgPointsFor",
												"value": 48.46154022216797
											}, {"name": "avgPointsAgainst", "value": 19.384614944458008}, {
												"name": "points",
												"value": 6.5
											}, {"name": "differential", "value": 378}, {
												"name": "streak",
												"value": 13
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 6}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/333/alabama-crimson-tide",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/333/alabama-crimson-tide",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/333",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/333",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/333",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/333",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:333&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/333",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/alabama-crimson-tide-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2026",
									"uid": "s:20~l:23~t:2026",
									"slug": "appalachian-state-mountaineers",
									"location": "Appalachian State",
									"name": "Mountaineers",
									"nickname": "Appalachian St",
									"abbreviation": "APP",
									"displayName": "Appalachian State Mountaineers",
									"shortDisplayName": "Mountaineers",
									"color": "000000",
									"alternateColor": "ffcd00",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2026.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2026.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-3",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 406
											}, {"name": "pointsAgainst", "value": 240}, {
												"name": "avgPointsFor",
												"value": 33.83333206176758
											}, {"name": "avgPointsAgainst", "value": 20}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 166}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.75
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 3}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2026/appalachian-state-mountaineers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2026/appalachian-state-mountaineers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2026",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2026",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2026",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2026",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2026&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2026",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/appalachian-state-mountaineers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "9",
									"uid": "s:20~l:23~t:9",
									"slug": "arizona-state-sun-devils",
									"location": "Arizona State",
									"name": "Sun Devils",
									"nickname": "Arizona State",
									"abbreviation": "ASU",
									"displayName": "Arizona State Sun Devils",
									"shortDisplayName": "Sun Devils",
									"color": "942139",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/9.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/9.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-2",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 161
											}, {"name": "pointsAgainst", "value": 93}, {
												"name": "avgPointsFor",
												"value": 40.25
											}, {"name": "avgPointsAgainst", "value": 23.25}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 68}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/9/arizona-state-sun-devils",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/9/arizona-state-sun-devils",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/9",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/9",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/9",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/9",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:9&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/9",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/arizona-state-sun-devils-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "12",
									"uid": "s:20~l:23~t:12",
									"slug": "arizona-wildcats",
									"location": "Arizona",
									"name": "Wildcats",
									"nickname": "Arizona",
									"abbreviation": "ARIZ",
									"displayName": "Arizona Wildcats",
									"shortDisplayName": "Wildcats",
									"color": "002449",
									"alternateColor": "00205b",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/12.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/12.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-5",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 87
											}, {"name": "pointsAgainst", "value": 199}, {
												"name": "avgPointsFor",
												"value": 17.399999618530273
											}, {"name": "avgPointsAgainst", "value": 39.79999923706055}, {
												"name": "points",
												"value": -2.5
											}, {"name": "differential", "value": -112}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 4}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/12/arizona-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/12/arizona-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/12",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/12",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/12",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/12",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:12&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/12",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/arizona-wildcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "8",
									"uid": "s:20~l:23~t:8",
									"slug": "arkansas-razorbacks",
									"location": "Arkansas",
									"name": "Razorbacks",
									"nickname": "Arkansas",
									"abbreviation": "ARK",
									"displayName": "Arkansas Razorbacks",
									"shortDisplayName": "Razorbacks",
									"color": "9c1831",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/8.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/8.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-7",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.30000001192092896
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 257
											}, {"name": "pointsAgainst", "value": 349}, {
												"name": "avgPointsFor",
												"value": 25.700000762939453
											}, {"name": "avgPointsAgainst", "value": 34.900001525878906}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -92}, {
												"name": "streak",
												"value": -4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {
												"name": "leagueWinPercent",
												"value": 0.30000001192092896
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/8/arkansas-razorbacks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/8/arkansas-razorbacks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/8",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/8",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/8",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/8",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:8&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/8",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/arkansas-razorbacks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2032",
									"uid": "s:20~l:23~t:2032",
									"slug": "arkansas-state-red-wolves",
									"location": "Arkansas State",
									"name": "Red Wolves",
									"nickname": "Arkansas State",
									"abbreviation": "ARST",
									"displayName": "Arkansas State Red Wolves",
									"shortDisplayName": "Red Wolves",
									"color": "e81018",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2032.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2032.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-7",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.3636363744735718
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 362
											}, {"name": "pointsAgainst", "value": 409}, {
												"name": "avgPointsFor",
												"value": 32.90909194946289
											}, {"name": "avgPointsAgainst", "value": 37.181819915771484}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -47}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.25
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2032/arkansas-state-red-wolves",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2032/arkansas-state-red-wolves",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2032",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2032",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2032",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2032",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2032&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2032",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/arkansas-state-red-wolves-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "349",
									"uid": "s:20~l:23~t:349",
									"slug": "army-black-knights",
									"location": "Army",
									"name": "Black Knights",
									"nickname": "Army",
									"abbreviation": "ARMY",
									"displayName": "Army Black Knights",
									"shortDisplayName": "Black Knights",
									"color": "ce9c00",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/349.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/349.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-3",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 321
											}, {"name": "pointsAgainst", "value": 178}, {
												"name": "avgPointsFor",
												"value": 26.75
											}, {"name": "avgPointsAgainst", "value": 14.833333015441895}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 143}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/349/army-black-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/349/army-black-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/349",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/349",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/349",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/349",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:349&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/349",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/army-black-knights-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2",
									"uid": "s:20~l:23~t:2",
									"slug": "auburn-tigers",
									"location": "Auburn",
									"name": "Tigers",
									"nickname": "Auburn",
									"abbreviation": "AUB",
									"displayName": "Auburn Tigers",
									"shortDisplayName": "Tigers",
									"color": "03244d",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-5",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5454545617103577
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 276
											}, {"name": "pointsAgainst", "value": 272}, {
												"name": "avgPointsFor",
												"value": 25.090909957885742
											}, {"name": "avgPointsAgainst", "value": 24.727272033691406}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 4}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6666666865348816
											}, {
												"name": "leagueWinPercent",
												"value": 0.6000000238418579
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 4
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2/auburn-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2/auburn-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/auburn-tigers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "252",
									"uid": "s:20~l:23~t:252",
									"slug": "byu-cougars",
									"location": "BYU",
									"name": "Cougars",
									"nickname": "BYU",
									"abbreviation": "BYU",
									"displayName": "BYU Cougars",
									"shortDisplayName": "Cougars",
									"color": "001E4C",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/252.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/252.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "11-1",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 11
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.9166666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 522
											}, {"name": "pointsAgainst", "value": 184}, {
												"name": "avgPointsFor",
												"value": 43.5
											}, {"name": "avgPointsAgainst", "value": 15.333333015441895}, {
												"name": "points",
												"value": 5
											}, {"name": "differential", "value": 338}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/252/byu-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/252/byu-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/252",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/252",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/252",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/252",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:252&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/252",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/byu-cougars-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2050",
									"uid": "s:20~l:23~t:2050",
									"slug": "ball-state-cardinals",
									"location": "Ball State",
									"name": "Cardinals",
									"nickname": "Ball State",
									"abbreviation": "BALL",
									"displayName": "Ball State Cardinals",
									"shortDisplayName": "Cardinals",
									"color": "DA0000",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2050.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2050.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-1",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.875
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 274
											}, {"name": "pointsAgainst", "value": 206}, {
												"name": "avgPointsFor",
												"value": 34.25
											}, {"name": "avgPointsAgainst", "value": 25.75}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 68}, {
												"name": "streak",
												"value": 7
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {
												"name": "leagueWinPercent",
												"value": 0.8333333134651184
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 5
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2050/ball-state-cardinals",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2050/ball-state-cardinals",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2050",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2050",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2050",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2050",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2050&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2050",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ball-state-cardinals-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "239",
									"uid": "s:20~l:23~t:239",
									"slug": "baylor-bears",
									"location": "Baylor",
									"name": "Bears",
									"nickname": "Baylor",
									"abbreviation": "BAY",
									"displayName": "Baylor Bears",
									"shortDisplayName": "Bears",
									"color": "004834",
									"alternateColor": "ffb81c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/239.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/239.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-7",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.2222222238779068
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 210
											}, {"name": "pointsAgainst", "value": 263}, {
												"name": "avgPointsFor",
												"value": 23.33333396911621
											}, {"name": "avgPointsAgainst", "value": 29.22222137451172}, {
												"name": "points",
												"value": -2.5
											}, {"name": "differential", "value": -53}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.2222222238779068
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/239/baylor-bears",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/239/baylor-bears",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/239",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/239",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/239",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/239",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:239&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/239",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/baylor-bears-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "68",
									"uid": "s:20~l:23~t:68",
									"slug": "boise-state-broncos",
									"location": "Boise State",
									"name": "Broncos",
									"nickname": "Boise State",
									"abbreviation": "BSU",
									"displayName": "Boise State Broncos",
									"shortDisplayName": "Broncos",
									"color": "09347A",
									"alternateColor": "d8d9da",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/68.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-2",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.7142857313156128
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 237
											}, {"name": "pointsAgainst", "value": 190}, {
												"name": "avgPointsFor",
												"value": 33.85714340209961
											}, {"name": "avgPointsAgainst", "value": 27.14285659790039}, {
												"name": "points",
												"value": 1.5
											}, {"name": "differential", "value": 47}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/68/boise-state-broncos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/68/boise-state-broncos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/68",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/68",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/68",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/68",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:68&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/68",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/boise-state-broncos-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "103",
									"uid": "s:20~l:23~t:103",
									"slug": "boston-college-eagles",
									"location": "Boston College",
									"name": "Eagles",
									"nickname": "Boston College",
									"abbreviation": "BC",
									"displayName": "Boston College Eagles",
									"shortDisplayName": "Eagles",
									"color": "88001a",
									"alternateColor": "a39161",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/103.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-5",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5454545617103577
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 306
											}, {"name": "pointsAgainst", "value": 312}, {
												"name": "avgPointsFor",
												"value": 27.81818199157715
											}, {"name": "avgPointsAgainst", "value": 28.363636016845703}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": -6}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/103/boston-college-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/103/boston-college-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/103",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/103",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/103",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/103",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:103&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/103",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/boston-college-eagles-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "189",
									"uid": "s:20~l:23~t:189",
									"slug": "bowling-green-falcons",
									"location": "Bowling Green",
									"name": "Falcons",
									"nickname": "Bowling Green",
									"abbreviation": "BGSU",
									"displayName": "Bowling Green Falcons",
									"shortDisplayName": "Falcons",
									"color": "2b1000",
									"alternateColor": "492000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/189.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/189.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-5",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 57
											}, {"name": "pointsAgainst", "value": 225}, {
												"name": "avgPointsFor",
												"value": 11.399999618530273
											}, {"name": "avgPointsAgainst", "value": 45}, {
												"name": "points",
												"value": -2.5
											}, {"name": "differential", "value": -168}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 4}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/189/bowling-green-falcons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/189/bowling-green-falcons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/189",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/189",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/189",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/189",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:189&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/189",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/bowling-green-falcons-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2084",
									"uid": "s:20~l:23~t:2084",
									"slug": "buffalo-bulls",
									"location": "Buffalo",
									"name": "Bulls",
									"nickname": "Buffalo",
									"abbreviation": "BUFF",
									"displayName": "Buffalo Bulls",
									"shortDisplayName": "Bulls",
									"color": "041A9B",
									"alternateColor": "ebebeb",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2084.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2084.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.8571428656578064
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 304
											}, {"name": "pointsAgainst", "value": 153}, {
												"name": "avgPointsFor",
												"value": 43.42856979370117
											}, {"name": "avgPointsAgainst", "value": 21.85714340209961}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 151}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2084/buffalo-bulls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2084/buffalo-bulls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2084",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2084",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2084",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2084",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2084&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2084",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/buffalo-bulls-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "25",
									"uid": "s:20~l:23~t:25",
									"slug": "california-golden-bears",
									"location": "California",
									"name": "Golden Bears",
									"nickname": "Cal",
									"abbreviation": "CAL",
									"displayName": "California Golden Bears",
									"shortDisplayName": "Golden Bears",
									"color": "031522",
									"alternateColor": "ffc423",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/25.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/25.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-3",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.25
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 81
											}, {"name": "pointsAgainst", "value": 106}, {
												"name": "avgPointsFor",
												"value": 20.25
											}, {"name": "avgPointsAgainst", "value": 26.5}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -25}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/25/california-golden-bears",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/25/california-golden-bears",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/25",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/25",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/25",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/25",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:25&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/25",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/california-golden-bears-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2117",
									"uid": "s:20~l:23~t:2117",
									"slug": "central-michigan-chippewas",
									"location": "Central Michigan",
									"name": "Chippewas",
									"nickname": "Cent Michigan",
									"abbreviation": "CMU",
									"displayName": "Central Michigan Chippewas",
									"shortDisplayName": "Chippewas",
									"color": "6a0032",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2117.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2117.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-3",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 188
											}, {"name": "pointsAgainst", "value": 181}, {
												"name": "avgPointsFor",
												"value": 31.33333396911621
											}, {"name": "avgPointsAgainst", "value": 30.16666603088379}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 7}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.4000000059604645
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2117/central-michigan-chippewas",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2117/central-michigan-chippewas",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2117",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2117",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2117",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2117",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2117&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2117",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/central-michigan-chippewas-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2429",
									"uid": "s:20~l:23~t:2429",
									"slug": "charlotte-49ers",
									"location": "Charlotte",
									"name": "49ers",
									"nickname": "Charlotte",
									"abbreviation": "CLT",
									"displayName": "Charlotte 49ers",
									"shortDisplayName": "49ers",
									"color": "0C562D",
									"alternateColor": "cfab7a",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2429.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2429.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-4",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 162
											}, {"name": "pointsAgainst", "value": 195}, {
												"name": "avgPointsFor",
												"value": 27
											}, {"name": "avgPointsAgainst", "value": 32.5}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -33}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2429/charlotte-49ers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2429/charlotte-49ers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2429",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2429",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2429",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2429",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2429&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2429",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/charlotte-49ers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2132",
									"uid": "s:20~l:23~t:2132",
									"slug": "cincinnati-bearcats",
									"location": "Cincinnati",
									"name": "Bearcats",
									"nickname": "Cincinnati",
									"abbreviation": "CIN",
									"displayName": "Cincinnati Bearcats",
									"shortDisplayName": "Bearcats",
									"color": "000000",
									"alternateColor": "717073",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2132.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.8999999761581421
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 375
											}, {"name": "pointsAgainst", "value": 168}, {
												"name": "avgPointsFor",
												"value": 37.5
											}, {"name": "avgPointsAgainst", "value": 16.799999237060547}, {
												"name": "points",
												"value": 4
											}, {"name": "differential", "value": 207}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2132/cincinnati-bearcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2132/cincinnati-bearcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2132",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2132",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2132",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2132",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2132&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2132",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/cincinnati-bearcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "228",
									"uid": "s:20~l:23~t:228",
									"slug": "clemson-tigers",
									"location": "Clemson",
									"name": "Tigers",
									"nickname": "Clemson",
									"abbreviation": "CLEM",
									"displayName": "Clemson Tigers",
									"shortDisplayName": "Tigers",
									"color": "F66733",
									"alternateColor": "522d80",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/228.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "10-2",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 10
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.8333333134651184
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 522
											}, {"name": "pointsAgainst", "value": 242}, {
												"name": "avgPointsFor",
												"value": 43.5
											}, {"name": "avgPointsAgainst", "value": 20.16666603088379}, {
												"name": "points",
												"value": 4
											}, {"name": "differential", "value": 280}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.8888888955116272
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/228/clemson-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/228/clemson-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/228",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/228",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/228",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/228",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:228&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/228",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/clemson-tigers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "324",
									"uid": "s:20~l:23~t:324",
									"slug": "coastal-carolina-chanticleers",
									"location": "Coastal Carolina",
									"name": "Chanticleers",
									"nickname": "C. Carolina",
									"abbreviation": "CCU",
									"displayName": "Coastal Carolina Chanticleers",
									"shortDisplayName": "Chanticleers",
									"color": "007073",
									"alternateColor": "876447",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/324.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/324.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "11-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 11
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.9166666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 446
											}, {"name": "pointsAgainst", "value": 243}, {
												"name": "avgPointsFor",
												"value": 37.16666793823242
											}, {"name": "avgPointsAgainst", "value": 20.25}, {
												"name": "points",
												"value": 5
											}, {"name": "differential", "value": 203}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/324/coastal-carolina-chanticleers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/324/coastal-carolina-chanticleers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/324",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/324",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/324",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/324",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:324&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/324",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/coastal-carolina-chanticleers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "38",
									"uid": "s:20~l:23~t:38",
									"slug": "colorado-buffaloes",
									"location": "Colorado",
									"name": "Buffaloes",
									"nickname": "Colorado",
									"abbreviation": "COLO",
									"displayName": "Colorado Buffaloes",
									"shortDisplayName": "Buffaloes",
									"color": "d1c57e",
									"alternateColor": "ffd200",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/38.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/38.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-2",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 171
											}, {"name": "pointsAgainst", "value": 190}, {
												"name": "avgPointsFor",
												"value": 28.5
											}, {"name": "avgPointsAgainst", "value": 31.66666603088379}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": -19}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6666666865348816
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/38/colorado-buffaloes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/38/colorado-buffaloes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/38",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/38",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/38",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/38",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:38&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/38",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/colorado-buffaloes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "36",
									"uid": "s:20~l:23~t:36",
									"slug": "colorado-state-rams",
									"location": "Colorado State",
									"name": "Rams",
									"nickname": "Colorado State",
									"abbreviation": "CSU",
									"displayName": "Colorado State Rams",
									"shortDisplayName": "Rams",
									"color": "004537",
									"alternateColor": "ffc425",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/36.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/36.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-3",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.25
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 89
											}, {"name": "pointsAgainst", "value": 143}, {
												"name": "avgPointsFor",
												"value": 22.25
											}, {"name": "avgPointsAgainst", "value": 35.75}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -54}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/36/colorado-state-rams",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/36/colorado-state-rams",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/36",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/36",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/36",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/36",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:36&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/36",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/colorado-state-rams-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "150",
									"uid": "s:20~l:23~t:150",
									"slug": "duke-blue-devils",
									"location": "Duke",
									"name": "Blue Devils",
									"nickname": "Duke",
									"abbreviation": "DUKE",
									"displayName": "Duke Blue Devils",
									"shortDisplayName": "Blue Devils",
									"color": "001A57",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/150.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-9",
											"stats": [{"name": "playoffSeed", "value": 14}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 9}, {
												"name": "winPercent",
												"value": 0.1818181872367859
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 273
											}, {"name": "pointsAgainst", "value": 419}, {
												"name": "avgPointsFor",
												"value": 24.81818199157715
											}, {"name": "avgPointsAgainst", "value": 38.09090805053711}, {
												"name": "points",
												"value": -3.5
											}, {"name": "differential", "value": -146}, {
												"name": "streak",
												"value": -4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.10000000149011612
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/150/duke-blue-devils",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/150/duke-blue-devils",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/150",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/150",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/150",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/150",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:150&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/150",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/duke-blue-devils-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "151",
									"uid": "s:20~l:23~t:151",
									"slug": "east-carolina-pirates",
									"location": "East Carolina",
									"name": "Pirates",
									"nickname": "East Carolina",
									"abbreviation": "ECU",
									"displayName": "East Carolina Pirates",
									"shortDisplayName": "Pirates",
									"color": "4b1869",
									"alternateColor": "f0907b",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/151.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/151.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-6",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 272
											}, {"name": "pointsAgainst", "value": 319}, {
												"name": "avgPointsFor",
												"value": 30.22222137451172
											}, {"name": "avgPointsAgainst", "value": 35.44444274902344}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -47}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.375}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/151/east-carolina-pirates",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/151/east-carolina-pirates",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/151",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/151",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/151",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/151",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:151&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/151",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/east-carolina-pirates-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2199",
									"uid": "s:20~l:23~t:2199",
									"slug": "eastern-michigan-eagles",
									"location": "Eastern Michigan",
									"name": "Eagles",
									"nickname": "E Michigan",
									"abbreviation": "EMU",
									"displayName": "Eastern Michigan Eagles",
									"shortDisplayName": "Eagles",
									"color": "00331b",
									"alternateColor": "f0f0f0",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2199.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2199.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-4",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 199
											}, {"name": "pointsAgainst", "value": 216}, {
												"name": "avgPointsFor",
												"value": 33.16666793823242
											}, {"name": "avgPointsAgainst", "value": 36}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -17}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.4000000059604645
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2199/eastern-michigan-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2199/eastern-michigan-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2199",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2199",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2199",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2199",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2199&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2199",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/eastern-michigan-eagles-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2226",
									"uid": "s:20~l:23~t:2226",
									"slug": "florida-atlantic-owls",
									"location": "Florida Atlantic",
									"name": "Owls",
									"nickname": "FAU",
									"abbreviation": "FAU",
									"displayName": "Florida Atlantic Owls",
									"shortDisplayName": "Owls",
									"color": "004B85",
									"alternateColor": "bb2f4c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2226.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2226.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.5555555820465088
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 170
											}, {"name": "pointsAgainst", "value": 157}, {
												"name": "avgPointsFor",
												"value": 18.88888931274414
											}, {"name": "avgPointsAgainst", "value": 17.44444465637207}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 13}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.75
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2226/florida-atlantic-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2226/florida-atlantic-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2226",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2226",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2226",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2226",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2226&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2226",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/florida-atlantic-owls-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "57",
									"uid": "s:20~l:23~t:57",
									"slug": "florida-gators",
									"location": "Florida",
									"name": "Gators",
									"nickname": "Florida",
									"abbreviation": "FLA",
									"displayName": "Florida Gators",
									"shortDisplayName": "Gators",
									"color": "0021A5",
									"alternateColor": "0021a5",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/57.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/57.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-4",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 478
											}, {"name": "pointsAgainst", "value": 370}, {
												"name": "avgPointsFor",
												"value": 39.83333206176758
											}, {"name": "avgPointsAgainst", "value": 30.83333396911621}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 108}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {
												"name": "leagueWinPercent",
												"value": 0.800000011920929
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 6
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/57/florida-gators",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/57/florida-gators",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/57",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/57",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/57",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/57",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:57&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/57",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/florida-gators-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2229",
									"uid": "s:20~l:23~t:2229",
									"slug": "florida-international-panthers",
									"location": "Florida International",
									"name": "Panthers",
									"nickname": "Florida Intl",
									"abbreviation": "FIU",
									"displayName": "Florida International Panthers",
									"shortDisplayName": "Panthers",
									"color": "001538",
									"alternateColor": "c5960c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2229.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2229.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-5",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 112
											}, {"name": "pointsAgainst", "value": 162}, {
												"name": "avgPointsFor",
												"value": 22.399999618530273
											}, {"name": "avgPointsAgainst", "value": 32.400001525878906}, {
												"name": "points",
												"value": -2.5
											}, {"name": "differential", "value": -50}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2229/florida-international-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2229/florida-international-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2229",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2229",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2229",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2229",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2229&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2229",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/florida-international-panthers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "52",
									"uid": "s:20~l:23~t:52",
									"slug": "florida-state-seminoles",
									"location": "Florida State",
									"name": "Seminoles",
									"nickname": "Florida State",
									"abbreviation": "FSU",
									"displayName": "Florida State Seminoles",
									"shortDisplayName": "Seminoles",
									"color": "782F40",
									"alternateColor": "ceb888",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/52.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/52.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-6",
											"stats": [{"name": "playoffSeed", "value": 13}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 232
											}, {"name": "pointsAgainst", "value": 324}, {
												"name": "avgPointsFor",
												"value": 25.77777862548828
											}, {"name": "avgPointsAgainst", "value": 36}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -92}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/52/florida-state-seminoles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/52/florida-state-seminoles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/52",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/52",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/52",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/52",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:52&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/52",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/florida-state-seminoles-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "278",
									"uid": "s:20~l:23~t:278",
									"slug": "fresno-state-bulldogs",
									"location": "Fresno State",
									"name": "Bulldogs",
									"nickname": "Fresno State",
									"abbreviation": "FRES",
									"displayName": "Fresno State Bulldogs",
									"shortDisplayName": "Bulldogs",
									"color": "c41230",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/278.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/278.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-3",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 197
											}, {"name": "pointsAgainst", "value": 180}, {
												"name": "avgPointsFor",
												"value": 32.83333206176758
											}, {"name": "avgPointsAgainst", "value": 30}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 17}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/278/fresno-state-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/278/fresno-state-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/278",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/278",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/278",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/278",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:278&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/278",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/fresno-state-bulldogs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "61",
									"uid": "s:20~l:23~t:61",
									"slug": "georgia-bulldogs",
									"location": "Georgia",
									"name": "Bulldogs",
									"nickname": "Georgia",
									"abbreviation": "UGA",
									"displayName": "Georgia Bulldogs",
									"shortDisplayName": "Bulldogs",
									"color": "CC0000",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/61.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-2",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.800000011920929
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 323
											}, {"name": "pointsAgainst", "value": 200}, {
												"name": "avgPointsFor",
												"value": 32.29999923706055
											}, {"name": "avgPointsAgainst", "value": 20}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 123}, {
												"name": "streak",
												"value": 4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.800000011920929
											}, {
												"name": "leagueWinPercent",
												"value": 0.7777777910232544
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 4
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/61/georgia-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/61/georgia-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/61",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/61",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/61",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/61",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:61&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/61",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/georgia-bulldogs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "290",
									"uid": "s:20~l:23~t:290",
									"slug": "georgia-southern-eagles",
									"location": "Georgia Southern",
									"name": "Eagles",
									"nickname": "Ga Southern",
									"abbreviation": "GASO",
									"displayName": "Georgia Southern Eagles",
									"shortDisplayName": "Eagles",
									"color": "003775",
									"alternateColor": "f0f0f0",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/290.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/290.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-5",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.6153846383094788
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 13}, {
												"name": "pointsFor",
												"value": 354
											}, {"name": "pointsAgainst", "value": 270}, {
												"name": "avgPointsFor",
												"value": 27.230770111083984
											}, {"name": "avgPointsAgainst", "value": 20.769229888916016}, {
												"name": "points",
												"value": 1.5
											}, {"name": "differential", "value": 84}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.25
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/290/georgia-southern-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/290/georgia-southern-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/290",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/290",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/290",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/290",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:290&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/290",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/georgia-southern-eagles-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2247",
									"uid": "s:20~l:23~t:2247",
									"slug": "georgia-state-panthers",
									"location": "Georgia State",
									"name": "Panthers",
									"nickname": "Georgia State",
									"abbreviation": "GAST",
									"displayName": "Georgia State Panthers",
									"shortDisplayName": "Panthers",
									"color": "1e539a",
									"alternateColor": "ebebeb",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2247.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2247.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6000000238418579
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 333
											}, {"name": "pointsAgainst", "value": 317}, {
												"name": "avgPointsFor",
												"value": 33.29999923706055
											}, {"name": "avgPointsAgainst", "value": 31.700000762939453}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 16}, {
												"name": "streak",
												"value": 3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2247/georgia-state-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2247/georgia-state-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2247",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2247",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2247",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2247",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2247&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2247",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/georgia-state-panthers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "59",
									"uid": "s:20~l:23~t:59",
									"slug": "georgia-tech-yellow-jackets",
									"location": "Georgia Tech",
									"name": "Yellow Jackets",
									"nickname": "Georgia Tech",
									"abbreviation": "GT",
									"displayName": "Georgia Tech Yellow Jackets",
									"shortDisplayName": "Yellow Jackets",
									"color": "00223e",
									"alternateColor": "002c56",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/59.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-7",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.30000001192092896
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 239
											}, {"name": "pointsAgainst", "value": 368}, {
												"name": "avgPointsFor",
												"value": 23.899999618530273
											}, {"name": "avgPointsAgainst", "value": 36.79999923706055}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -129}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/59/georgia-tech-yellow-jackets",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/59/georgia-tech-yellow-jackets",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/59",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/59",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/59",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/59",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:59&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/59",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/georgia-tech-yellow-jackets-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "62",
									"uid": "s:20~l:23~t:62",
									"slug": "hawaii-rainbow-warriors",
									"location": "Hawai'i",
									"name": "Rainbow Warriors",
									"nickname": "Hawai'i",
									"abbreviation": "HAW",
									"displayName": "Hawai'i Rainbow Warriors",
									"shortDisplayName": "Rainbow Warriors",
									"color": "003420",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/62.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/62.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-4",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.5555555820465088
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 236
											}, {"name": "pointsAgainst", "value": 248}, {
												"name": "avgPointsFor",
												"value": 26.22222137451172
											}, {"name": "avgPointsAgainst", "value": 27.55555534362793}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": -12}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/62/hawaii-rainbow-warriors",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/62/hawaii-rainbow-warriors",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/62",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/62",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/62",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/62",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:62&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/62",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/hawai'i-rainbow-warriors-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "248",
									"uid": "s:20~l:23~t:248",
									"slug": "houston-cougars",
									"location": "Houston",
									"name": "Cougars",
									"nickname": "Houston",
									"abbreviation": "HOU",
									"displayName": "Houston Cougars",
									"shortDisplayName": "Cougars",
									"color": "C90822",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/248.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/248.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-5",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.375
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 240
											}, {"name": "pointsAgainst", "value": 256}, {
												"name": "avgPointsFor",
												"value": 30
											}, {"name": "avgPointsAgainst", "value": 32}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -16}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/248/houston-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/248/houston-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/248",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/248",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/248",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/248",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:248&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/248",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/houston-cougars-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "356",
									"uid": "s:20~l:23~t:356",
									"slug": "illinois-fighting-illini",
									"location": "Illinois",
									"name": "Fighting Illini",
									"nickname": "Illinois",
									"abbreviation": "ILL",
									"displayName": "Illinois Fighting Illini",
									"shortDisplayName": "Fighting Illini",
									"color": "f77329",
									"alternateColor": "fa6300",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/356.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/356.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-6",
											"stats": [{"name": "playoffSeed", "value": 14}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.25
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 161
											}, {"name": "pointsAgainst", "value": 279}, {
												"name": "avgPointsFor",
												"value": 20.125
											}, {"name": "avgPointsAgainst", "value": 34.875}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -118}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.1666666716337204
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 5}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/356/illinois-fighting-illini",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/356/illinois-fighting-illini",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/356",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/356",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/356",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/356",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:356&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/356",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/illinois-fighting-illini-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "84",
									"uid": "s:20~l:23~t:84",
									"slug": "indiana-hoosiers",
									"location": "Indiana",
									"name": "Hoosiers",
									"nickname": "Indiana",
									"abbreviation": "IU",
									"displayName": "Indiana Hoosiers",
									"shortDisplayName": "Hoosiers",
									"color": "7D110C",
									"alternateColor": "eeedeb",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/84.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/84.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-2",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 231
											}, {"name": "pointsAgainst", "value": 162}, {
												"name": "avgPointsFor",
												"value": 28.875
											}, {"name": "avgPointsAgainst", "value": 20.25}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 69}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.8333333134651184
											}, {
												"name": "leagueWinPercent",
												"value": 0.8571428656578064
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 5
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/84/indiana-hoosiers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/84/indiana-hoosiers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/84",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/84",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/84",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/84",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:84&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/84",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/indiana-hoosiers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2294",
									"uid": "s:20~l:23~t:2294",
									"slug": "iowa-hawkeyes",
									"location": "Iowa",
									"name": "Hawkeyes",
									"nickname": "Iowa",
									"abbreviation": "IOWA",
									"displayName": "Iowa Hawkeyes",
									"shortDisplayName": "Hawkeyes",
									"color": "000000",
									"alternateColor": "ffe100",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2294.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-2",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 254
											}, {"name": "pointsAgainst", "value": 128}, {
												"name": "avgPointsFor",
												"value": 31.75
											}, {"name": "avgPointsAgainst", "value": 16}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 126}, {
												"name": "streak",
												"value": 6
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6666666865348816
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2294/iowa-hawkeyes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2294/iowa-hawkeyes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2294",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2294",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2294",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2294",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2294&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2294",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/iowa-hawkeyes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "66",
									"uid": "s:20~l:23~t:66",
									"slug": "iowa-state-cyclones",
									"location": "Iowa State",
									"name": "Cyclones",
									"nickname": "Iowa State",
									"abbreviation": "ISU",
									"displayName": "Iowa State Cyclones",
									"shortDisplayName": "Cyclones",
									"color": "660015",
									"alternateColor": "830b2c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/66.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/66.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-3",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 395
											}, {"name": "pointsAgainst", "value": 257}, {
												"name": "avgPointsFor",
												"value": 32.91666793823242
											}, {"name": "avgPointsAgainst", "value": 21.41666603088379}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 138}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.8888888955116272
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/66/iowa-state-cyclones",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/66/iowa-state-cyclones",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/66",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/66",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/66",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/66",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:66&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/66",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/iowa-state-cyclones-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2305",
									"uid": "s:20~l:23~t:2305",
									"slug": "kansas-jayhawks",
									"location": "Kansas",
									"name": "Jayhawks",
									"nickname": "Kansas",
									"abbreviation": "KU",
									"displayName": "Kansas Jayhawks",
									"shortDisplayName": "Jayhawks",
									"color": "0022B4",
									"alternateColor": "e8000d",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2305.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-9",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 9}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 142
											}, {"name": "pointsAgainst", "value": 414}, {
												"name": "avgPointsFor",
												"value": 15.777777671813965
											}, {"name": "avgPointsAgainst", "value": 46}, {
												"name": "points",
												"value": -4.5
											}, {"name": "differential", "value": -272}, {
												"name": "streak",
												"value": -9
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2305/kansas-jayhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2305/kansas-jayhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2305",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2305",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2305",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2305",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2305&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2305",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/kansas-jayhawks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2306",
									"uid": "s:20~l:23~t:2306",
									"slug": "kansas-state-wildcats",
									"location": "Kansas State",
									"name": "Wildcats",
									"nickname": "Kansas State",
									"abbreviation": "KSU",
									"displayName": "Kansas State Wildcats",
									"shortDisplayName": "Wildcats",
									"color": "633194",
									"alternateColor": "e7d2ad",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2306.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2306.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-6",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4000000059604645
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 266
											}, {"name": "pointsAgainst", "value": 322}, {
												"name": "avgPointsFor",
												"value": 26.600000381469727
											}, {"name": "avgPointsAgainst", "value": 32.20000076293945}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -56}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.4444444477558136
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2306/kansas-state-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2306/kansas-state-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2306",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2306",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2306",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2306",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2306&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2306",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/kansas-state-wildcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2309",
									"uid": "s:20~l:23~t:2309",
									"slug": "kent-state-golden-flashes",
									"location": "Kent State",
									"name": "Golden Flashes",
									"nickname": "Kent State",
									"abbreviation": "KENT",
									"displayName": "Kent State Golden Flashes",
									"shortDisplayName": "Golden Flashes",
									"color": "002445",
									"alternateColor": "f0b510",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2309.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2309.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-1",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 199
											}, {"name": "pointsAgainst", "value": 152}, {
												"name": "avgPointsFor",
												"value": 49.75
											}, {"name": "avgPointsAgainst", "value": 38}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 47}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6666666865348816
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2309/kent-state-golden-flashes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2309/kent-state-golden-flashes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2309",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2309",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2309",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2309",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2309&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2309",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/kent-state-golden-flashes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "96",
									"uid": "s:20~l:23~t:96",
									"slug": "kentucky-wildcats",
									"location": "Kentucky",
									"name": "Wildcats",
									"nickname": "Kentucky",
									"abbreviation": "UK",
									"displayName": "Kentucky Wildcats",
									"shortDisplayName": "Wildcats",
									"color": "005DAA",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/96.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/96.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-6",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4545454680919647
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 240
											}, {"name": "pointsAgainst", "value": 285}, {
												"name": "avgPointsFor",
												"value": 21.81818199157715
											}, {"name": "avgPointsAgainst", "value": 25.909090042114258}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": -45}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.4000000059604645
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/96/kentucky-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/96/kentucky-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/96",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/96",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/96",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/96",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:96&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/96",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/kentucky-wildcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "99",
									"uid": "s:20~l:23~t:99",
									"slug": "lsu-tigers",
									"location": "LSU",
									"name": "Tigers",
									"nickname": "LSU",
									"abbreviation": "LSU",
									"displayName": "LSU Tigers",
									"shortDisplayName": "Tigers",
									"color": "22005c",
									"alternateColor": "fdd023",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/99.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/99.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-5",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 320
											}, {"name": "pointsAgainst", "value": 349}, {
												"name": "avgPointsFor",
												"value": 32
											}, {"name": "avgPointsAgainst", "value": 34.900001525878906}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": -29}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 4}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/99/lsu-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/99/lsu-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/99",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/99",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/99",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/99",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:99&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/99",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/lsu-tigers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2335",
									"uid": "s:20~l:23~t:2335",
									"slug": "liberty-flames",
									"location": "Liberty",
									"name": "Flames",
									"nickname": "Liberty",
									"abbreviation": "LIB",
									"displayName": "Liberty Flames",
									"shortDisplayName": "Flames",
									"color": "071740",
									"alternateColor": "a61f21",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2335.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2335.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "10-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 10
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.9090909361839294
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 420
											}, {"name": "pointsAgainst", "value": 226}, {
												"name": "avgPointsFor",
												"value": 38.181819915771484
											}, {"name": "avgPointsAgainst", "value": 20.545454025268555}, {
												"name": "points",
												"value": 4.5
											}, {"name": "differential", "value": 194}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2335/liberty-flames",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2335/liberty-flames",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2335",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2335",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2335",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2335",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2335&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2335",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/liberty-flames-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "309",
									"uid": "s:20~l:23~t:309",
									"slug": "louisiana-ragin-cajuns",
									"location": "Louisiana",
									"name": "Ragin' Cajuns",
									"nickname": "Louisiana",
									"abbreviation": "UL",
									"displayName": "Louisiana Ragin' Cajuns",
									"shortDisplayName": "Ragin' Cajuns",
									"color": "ce2842",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/309.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/309.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "10-1",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 10
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.9090909361839294
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 370
											}, {"name": "pointsAgainst", "value": 242}, {
												"name": "avgPointsFor",
												"value": 33.6363639831543
											}, {"name": "avgPointsAgainst", "value": 22}, {
												"name": "points",
												"value": 4.5
											}, {"name": "differential", "value": 128}, {
												"name": "streak",
												"value": 7
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 0.875}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/309/louisiana-ragin-cajuns",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/309/louisiana-ragin-cajuns",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/309",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/309",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/309",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/309",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:309&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/309",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/louisiana-ragin'-cajuns-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2348",
									"uid": "s:20~l:23~t:2348",
									"slug": "louisiana-tech-bulldogs",
									"location": "Louisiana Tech",
									"name": "Bulldogs",
									"nickname": "Louisiana Tech",
									"abbreviation": "LT",
									"displayName": "Louisiana Tech Bulldogs",
									"shortDisplayName": "Bulldogs",
									"color": "002d65",
									"alternateColor": "d3313a",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2348.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2348.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-5",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 267
											}, {"name": "pointsAgainst", "value": 347}, {
												"name": "avgPointsFor",
												"value": 26.700000762939453
											}, {"name": "avgPointsAgainst", "value": 34.70000076293945}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": -80}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.800000011920929
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 4
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2348/louisiana-tech-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2348/louisiana-tech-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2348",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2348",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2348",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2348",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2348&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2348",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/louisiana-tech-bulldogs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "97",
									"uid": "s:20~l:23~t:97",
									"slug": "louisville-cardinals",
									"location": "Louisville",
									"name": "Cardinals",
									"nickname": "Louisville",
									"abbreviation": "LOU",
									"displayName": "Louisville Cardinals",
									"shortDisplayName": "Cardinals",
									"color": "ad000a",
									"alternateColor": "cccccc",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/97.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-7",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.3636363744735718
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 325
											}, {"name": "pointsAgainst", "value": 293}, {
												"name": "avgPointsFor",
												"value": 29.545454025268555
											}, {"name": "avgPointsAgainst", "value": 26.636363983154297}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": 32}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.30000001192092896
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/97/louisville-cardinals",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/97/louisville-cardinals",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/97",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/97",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/97",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/97",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:97&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/97",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/louisville-cardinals-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "276",
									"uid": "s:20~l:23~t:276",
									"slug": "marshall-thundering-herd",
									"location": "Marshall",
									"name": "Thundering Herd",
									"nickname": "Marshall",
									"abbreviation": "MRSH",
									"displayName": "Marshall Thundering Herd",
									"shortDisplayName": "Thundering Herd",
									"color": "186329",
									"alternateColor": "be854c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/276.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/276.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-3",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.699999988079071
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 285
											}, {"name": "pointsAgainst", "value": 130}, {
												"name": "avgPointsFor",
												"value": 28.5
											}, {"name": "avgPointsAgainst", "value": 13}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 155}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {
												"name": "leagueWinPercent",
												"value": 0.800000011920929
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/276/marshall-thundering-herd",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/276/marshall-thundering-herd",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/276",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/276",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/276",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/276",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:276&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/276",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/marshall-thundering-herd-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "120",
									"uid": "s:20~l:23~t:120",
									"slug": "maryland-terrapins",
									"location": "Maryland",
									"name": "Terrapins",
									"nickname": "Maryland",
									"abbreviation": "MD",
									"displayName": "Maryland Terrapins",
									"shortDisplayName": "Terrapins",
									"color": "D5002B",
									"alternateColor": "ffcd00",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/120.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/120.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-3",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.4000000059604645
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 118
											}, {"name": "pointsAgainst", "value": 160}, {
												"name": "avgPointsFor",
												"value": 23.600000381469727
											}, {"name": "avgPointsAgainst", "value": 32}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": -42}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {
												"name": "leagueWinPercent",
												"value": 0.4000000059604645
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/120/maryland-terrapins",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/120/maryland-terrapins",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/120",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/120",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/120",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/120",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:120&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/120",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/maryland-terrapins-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "235",
									"uid": "s:20~l:23~t:235",
									"slug": "memphis-tigers",
									"location": "Memphis",
									"name": "Tigers",
									"nickname": "Memphis",
									"abbreviation": "MEM",
									"displayName": "Memphis Tigers",
									"shortDisplayName": "Tigers",
									"color": "002447",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/235.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/235.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-3",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.7272727489471436
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 341
											}, {"name": "pointsAgainst", "value": 307}, {
												"name": "avgPointsFor",
												"value": 31
											}, {"name": "avgPointsAgainst", "value": 27.909090042114258}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 34}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.625}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/235/memphis-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/235/memphis-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/235",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/235",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/235",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/235",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:235&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/235",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/memphis-tigers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "193",
									"uid": "s:20~l:23~t:193",
									"slug": "miami-oh-redhawks",
									"location": "Miami (OH)",
									"name": "RedHawks",
									"nickname": "Miami (OH)",
									"abbreviation": "M-OH",
									"displayName": "Miami (OH) RedHawks",
									"shortDisplayName": "RedHawks",
									"color": "a4000c",
									"alternateColor": "f0f0f0",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/193.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/193.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-1",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 3}, {
												"name": "pointsFor",
												"value": 86
											}, {"name": "pointsAgainst", "value": 80}, {
												"name": "avgPointsFor",
												"value": 28.66666603088379
											}, {"name": "avgPointsAgainst", "value": 26.66666603088379}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 6}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/193/miami-oh-redhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/193/miami-oh-redhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/193",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/193",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/193",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/193",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:193&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/193",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/miami-(oh)-redhawks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2390",
									"uid": "s:20~l:23~t:2390",
									"slug": "miami-hurricanes",
									"location": "Miami",
									"name": "Hurricanes",
									"nickname": "Miami",
									"abbreviation": "MIAMI",
									"displayName": "Miami Hurricanes",
									"shortDisplayName": "Hurricanes",
									"color": "004325",
									"alternateColor": "f0f0f0",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2390.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-3",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.7272727489471436
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 374
											}, {"name": "pointsAgainst", "value": 297}, {
												"name": "avgPointsFor",
												"value": 34
											}, {"name": "avgPointsAgainst", "value": 27}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 77}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.7777777910232544
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2390/miami-hurricanes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2390/miami-hurricanes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2390",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2390",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2390",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2390",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2390&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2390",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/miami-hurricanes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "127",
									"uid": "s:20~l:23~t:127",
									"slug": "michigan-state-spartans",
									"location": "Michigan State",
									"name": "Spartans",
									"nickname": "Mich. St.",
									"abbreviation": "MSU",
									"displayName": "Michigan State Spartans",
									"shortDisplayName": "Spartans",
									"color": "18453B",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/127.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/127.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-5",
											"stats": [{"name": "playoffSeed", "value": 13}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.2857142984867096
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 126
											}, {"name": "pointsAgainst", "value": 246}, {
												"name": "avgPointsFor",
												"value": 18
											}, {"name": "avgPointsAgainst", "value": 35.14285659790039}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -120}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.20000000298023224
											}, {
												"name": "leagueWinPercent",
												"value": 0.2857142984867096
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/127/michigan-state-spartans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/127/michigan-state-spartans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/127",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/127",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/127",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/127",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:127&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/127",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/michigan-state-spartans-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "130",
									"uid": "s:20~l:23~t:130",
									"slug": "michigan-wolverines",
									"location": "Michigan",
									"name": "Wolverines",
									"nickname": "Michigan",
									"abbreviation": "MICH",
									"displayName": "Michigan Wolverines",
									"shortDisplayName": "Wolverines",
									"color": "00274c",
									"alternateColor": "00274c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/130.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/130.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-4",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 170
											}, {"name": "pointsAgainst", "value": 207}, {
												"name": "avgPointsFor",
												"value": 28.33333396911621
											}, {"name": "avgPointsAgainst", "value": 34.5}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -37}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.25
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/130/michigan-wolverines",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/130/michigan-wolverines",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/130",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/130",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/130",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/130",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:130&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/130",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/michigan-wolverines-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2393",
									"uid": "s:20~l:23~t:2393",
									"slug": "middle-tennessee-blue-raiders",
									"location": "Middle Tennessee",
									"name": "Blue Raiders",
									"nickname": "Mid Tennessee",
									"abbreviation": "MTSU",
									"displayName": "Middle Tennessee Blue Raiders",
									"shortDisplayName": "Blue Raiders",
									"color": "0079C2",
									"alternateColor": "c3c5c8",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2393.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2393.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-6",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 206
											}, {"name": "pointsAgainst", "value": 319}, {
												"name": "avgPointsFor",
												"value": 22.88888931274414
											}, {"name": "avgPointsAgainst", "value": 35.44444274902344}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -113}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2393/middle-tennessee-blue-raiders",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2393/middle-tennessee-blue-raiders",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2393",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2393",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2393",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2393",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2393&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2393",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/middle-tennessee-blue-raiders-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "135",
									"uid": "s:20~l:23~t:135",
									"slug": "minnesota-golden-gophers",
									"location": "Minnesota",
									"name": "Golden Gophers",
									"nickname": "Minnesota",
									"abbreviation": "MINN",
									"displayName": "Minnesota Golden Gophers",
									"shortDisplayName": "Golden Gophers",
									"color": "981a31",
									"alternateColor": "981a31",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/135.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/135.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-4",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.4285714328289032
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 2
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 191
											}, {"name": "pointsAgainst", "value": 211}, {
												"name": "avgPointsFor",
												"value": 27.285715103149414
											}, {"name": "avgPointsAgainst", "value": 30.14285659790039}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": -20}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6000000238418579
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/135/minnesota-golden-gophers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/135/minnesota-golden-gophers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/135",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/135",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/135",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/135",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:135&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/135",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/minnesota-golden-gophers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "344",
									"uid": "s:20~l:23~t:344",
									"slug": "mississippi-state-bulldogs",
									"location": "Mississippi State",
									"name": "Bulldogs",
									"nickname": "Mississippi St",
									"abbreviation": "MSST",
									"displayName": "Mississippi State Bulldogs",
									"shortDisplayName": "Bulldogs",
									"color": "762123",
									"alternateColor": "c8c8c8",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/344.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/344.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-7",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.3636363744735718
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 235
											}, {"name": "pointsAgainst", "value": 309}, {
												"name": "avgPointsFor",
												"value": 21.363636016845703
											}, {"name": "avgPointsAgainst", "value": 28.090909957885742}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -74}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.1666666716337204
											}, {
												"name": "leagueWinPercent",
												"value": 0.30000001192092896
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 5
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/344/mississippi-state-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/344/mississippi-state-bulldogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/344",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/344",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/344",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/344",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:344&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/344",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/mississippi-state-bulldogs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "142",
									"uid": "s:20~l:23~t:142",
									"slug": "missouri-tigers",
									"location": "Missouri",
									"name": "Tigers",
									"nickname": "Missouri",
									"abbreviation": "MIZ",
									"displayName": "Missouri Tigers",
									"shortDisplayName": "Tigers",
									"color": "000000",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/142.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/142.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-5",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 267
											}, {"name": "pointsAgainst", "value": 323}, {
												"name": "avgPointsFor",
												"value": 26.700000762939453
											}, {"name": "avgPointsAgainst", "value": 32.29999923706055}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": -56}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 3}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/142/missouri-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/142/missouri-tigers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/142",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/142",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/142",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/142",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:142&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/142",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/missouri-tigers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "152",
									"uid": "s:20~l:23~t:152",
									"slug": "nc-state-wolfpack",
									"location": "NC State",
									"name": "Wolfpack",
									"nickname": "NC State",
									"abbreviation": "NCST",
									"displayName": "NC State Wolfpack",
									"shortDisplayName": "Wolfpack",
									"color": "EF1216",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/152.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-4",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 363
											}, {"name": "pointsAgainst", "value": 350}, {
												"name": "avgPointsFor",
												"value": 30.25
											}, {"name": "avgPointsAgainst", "value": 29.16666603088379}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 13}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.699999988079071
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/152/nc-state-wolfpack",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/152/nc-state-wolfpack",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/152",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/152",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/152",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/152",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:152&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/152",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/nc-state-wolfpack-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2426",
									"uid": "s:20~l:23~t:2426",
									"slug": "navy-midshipmen",
									"location": "Navy",
									"name": "Midshipmen",
									"nickname": "Navy",
									"abbreviation": "NAVY",
									"displayName": "Navy Midshipmen",
									"shortDisplayName": "Midshipmen",
									"color": "131630",
									"alternateColor": "b6a77c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2426.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2426.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-7",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.30000001192092896
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 166
											}, {"name": "pointsAgainst", "value": 303}, {
												"name": "avgPointsFor",
												"value": 16.600000381469727
											}, {"name": "avgPointsAgainst", "value": 30.299999237060547}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -137}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2426/navy-midshipmen",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2426/navy-midshipmen",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2426",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2426",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2426",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2426",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2426&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2426",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/navy-midshipmen-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "158",
									"uid": "s:20~l:23~t:158",
									"slug": "nebraska-cornhuskers",
									"location": "Nebraska",
									"name": "Cornhuskers",
									"nickname": "Nebraska",
									"abbreviation": "NEB",
									"displayName": "Nebraska Cornhuskers",
									"shortDisplayName": "Cornhuskers",
									"color": "F20017",
									"alternateColor": "f5f1e7",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/158.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/158.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-5",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.375
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 185
											}, {"name": "pointsAgainst", "value": 235}, {
												"name": "avgPointsFor",
												"value": 23.125
											}, {"name": "avgPointsAgainst", "value": 29.375}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -50}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.20000000298023224
											}, {"name": "leagueWinPercent", "value": 0.375}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 4}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/158/nebraska-cornhuskers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/158/nebraska-cornhuskers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/158",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/158",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/158",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/158",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:158&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/158",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/nebraska-cornhuskers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2440",
									"uid": "s:20~l:23~t:2440",
									"slug": "nevada-wolf-pack",
									"location": "Nevada",
									"name": "Wolf Pack",
									"nickname": "Nevada",
									"abbreviation": "NEV",
									"displayName": "Nevada Wolf Pack",
									"shortDisplayName": "Wolf Pack",
									"color": "153E5F",
									"alternateColor": "8e9295",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2440.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2440.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-2",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.7777777910232544
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 277
											}, {"name": "pointsAgainst", "value": 210}, {
												"name": "avgPointsFor",
												"value": 30.77777862548828
											}, {"name": "avgPointsAgainst", "value": 23.33333396911621}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 67}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2440/nevada-wolf-pack",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2440/nevada-wolf-pack",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2440",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2440",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2440",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2440",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2440&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2440",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/nevada-wolf-pack-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "167",
									"uid": "s:20~l:23~t:167",
									"slug": "new-mexico-lobos",
									"location": "New Mexico",
									"name": "Lobos",
									"nickname": "New Mexico",
									"abbreviation": "UNM",
									"displayName": "New Mexico Lobos",
									"shortDisplayName": "Lobos",
									"color": "000000",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/167.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/167.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-5",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.2857142984867096
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 167
											}, {"name": "pointsAgainst", "value": 228}, {
												"name": "avgPointsFor",
												"value": 23.85714340209961
											}, {"name": "avgPointsAgainst", "value": 32.57143020629883}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -61}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.2857142984867096
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/167/new-mexico-lobos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/167/new-mexico-lobos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/167",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/167",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/167",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/167",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:167&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/167",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/new-mexico-lobos-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "166",
									"uid": "s:20~l:23~t:166",
									"slug": "new-mexico-state-aggies",
									"location": "New Mexico State",
									"name": "Aggies",
									"nickname": "New Mexico St",
									"abbreviation": "NMSU",
									"displayName": "New Mexico State Aggies",
									"shortDisplayName": "Aggies",
									"color": "891216",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/166.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/166.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-0",
											"stats": [{"name": "playoffSeed", "value": 0}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 0}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 0}, {
												"name": "pointsFor",
												"value": 0
											}, {"name": "pointsAgainst", "value": 0}, {
												"name": "avgPointsFor",
												"value": 0
											}, {"name": "avgPointsAgainst", "value": 0}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 0}, {
												"name": "streak",
												"value": 0
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/166/new-mexico-state-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/166/new-mexico-state-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/166",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/166",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/166",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/166",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:166&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/166",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/new-mexico-state-aggies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "153",
									"uid": "s:20~l:23~t:153",
									"slug": "north-carolina-tar-heels",
									"location": "North Carolina",
									"name": "Tar Heels",
									"nickname": "North Carolina",
									"abbreviation": "UNC",
									"displayName": "North Carolina Tar Heels",
									"shortDisplayName": "Tar Heels",
									"color": "99bfe5",
									"alternateColor": "13294b",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/153.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/153.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 500
											}, {"name": "pointsAgainst", "value": 353}, {
												"name": "avgPointsFor",
												"value": 41.66666793823242
											}, {"name": "avgPointsAgainst", "value": 29.41666603088379}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 147}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.699999988079071
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/153/north-carolina-tar-heels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/153/north-carolina-tar-heels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/153",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/153",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/153",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/153",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:153&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/153",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/north-carolina-tar-heels-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "249",
									"uid": "s:20~l:23~t:249",
									"slug": "north-texas-mean-green",
									"location": "North Texas",
									"name": "Mean Green",
									"nickname": "North Texas",
									"abbreviation": "UNT",
									"displayName": "North Texas Mean Green",
									"shortDisplayName": "Mean Green",
									"color": "00853D",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/249.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/249.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-6",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4000000059604645
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 344
											}, {"name": "pointsAgainst", "value": 428}, {
												"name": "avgPointsFor",
												"value": 34.400001525878906
											}, {"name": "avgPointsAgainst", "value": 42.79999923706055}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -84}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.4000000059604645
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/249/north-texas-mean-green",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/249/north-texas-mean-green",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/249",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/249",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/249",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/249",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:249&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/249",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/north-texas-mean-green-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2459",
									"uid": "s:20~l:23~t:2459",
									"slug": "northern-illinois-huskies",
									"location": "Northern Illinois",
									"name": "Huskies",
									"nickname": "N Illinois",
									"abbreviation": "NIU",
									"displayName": "Northern Illinois Huskies",
									"shortDisplayName": "Huskies",
									"color": "F1122C",
									"alternateColor": "cc0000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2459.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2459.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-6",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 149
											}, {"name": "pointsAgainst", "value": 232}, {
												"name": "avgPointsFor",
												"value": 24.83333396911621
											}, {"name": "avgPointsAgainst", "value": 38.66666793823242}, {
												"name": "points",
												"value": -3
											}, {"name": "differential", "value": -83}, {
												"name": "streak",
												"value": -6
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 5}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2459/northern-illinois-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2459/northern-illinois-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2459",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2459",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2459",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2459",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2459&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2459",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/northern-illinois-huskies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "77",
									"uid": "s:20~l:23~t:77",
									"slug": "northwestern-wildcats",
									"location": "Northwestern",
									"name": "Wildcats",
									"nickname": "Northwestern",
									"abbreviation": "NW",
									"displayName": "Northwestern Wildcats",
									"shortDisplayName": "Wildcats",
									"color": "372286",
									"alternateColor": "d6cac1",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/77.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/77.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-2",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.7777777910232544
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 222
											}, {"name": "pointsAgainst", "value": 143}, {
												"name": "avgPointsFor",
												"value": 24.66666603088379
											}, {"name": "avgPointsAgainst", "value": 15.88888931274414}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 79}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {
												"name": "leagueWinPercent",
												"value": 0.8571428656578064
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 5
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/77/northwestern-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/77/northwestern-wildcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/77",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/77",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/77",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/77",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:77&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/77",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/northwestern-wildcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "87",
									"uid": "s:20~l:23~t:87",
									"slug": "notre-dame-fighting-irish",
									"location": "Notre Dame",
									"name": "Fighting Irish",
									"nickname": "Notre Dame",
									"abbreviation": "ND",
									"displayName": "Notre Dame Fighting Irish",
									"shortDisplayName": "Fighting Irish",
									"color": "00122b",
									"alternateColor": "ae9142",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/87.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/87.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "10-2",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 10
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.8333333134651184
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 401
											}, {"name": "pointsAgainst", "value": 236}, {
												"name": "avgPointsFor",
												"value": 33.41666793823242
											}, {"name": "avgPointsAgainst", "value": 19.66666603088379}, {
												"name": "points",
												"value": 4
											}, {"name": "differential", "value": 165}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/87/notre-dame-fighting-irish",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/87/notre-dame-fighting-irish",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/87",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/87",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/87",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/87",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:87&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/87",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/notre-dame-fighting-irish-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "195",
									"uid": "s:20~l:23~t:195",
									"slug": "ohio-bobcats",
									"location": "Ohio",
									"name": "Bobcats",
									"nickname": "Ohio",
									"abbreviation": "OHIO",
									"displayName": "Ohio Bobcats",
									"shortDisplayName": "Bobcats",
									"color": "295A29",
									"alternateColor": "e4bb85",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/195.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/195.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-1",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 3}, {
												"name": "pointsFor",
												"value": 103
											}, {"name": "pointsAgainst", "value": 50}, {
												"name": "avgPointsFor",
												"value": 34.33333206176758
											}, {"name": "avgPointsAgainst", "value": 16.66666603088379}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 53}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/195/ohio-bobcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/195/ohio-bobcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/195",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/195",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/195",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/195",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:195&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/195",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ohio-bobcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "194",
									"uid": "s:20~l:23~t:194",
									"slug": "ohio-state-buckeyes",
									"location": "Ohio State",
									"name": "Buckeyes",
									"nickname": "Ohio State",
									"abbreviation": "OSU",
									"displayName": "Ohio State Buckeyes",
									"shortDisplayName": "Buckeyes",
									"color": "DE3121",
									"alternateColor": "666666",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/194.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/194.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.875
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 328
											}, {"name": "pointsAgainst", "value": 206}, {
												"name": "avgPointsFor",
												"value": 41
											}, {"name": "avgPointsAgainst", "value": 25.75}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 122}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/194/ohio-state-buckeyes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/194",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/194",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/194",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/194",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:194&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/194",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ohio-state-buckeyes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "201",
									"uid": "s:20~l:23~t:201",
									"slug": "oklahoma-sooners",
									"location": "Oklahoma",
									"name": "Sooners",
									"nickname": "Oklahoma",
									"abbreviation": "OU",
									"displayName": "Oklahoma Sooners",
									"shortDisplayName": "Sooners",
									"color": "7b0000",
									"alternateColor": "cccccc",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/201.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/201.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-2",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.8181818127632141
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 473
											}, {"name": "pointsAgainst", "value": 239}, {
												"name": "avgPointsFor",
												"value": 43
											}, {"name": "avgPointsAgainst", "value": 21.727272033691406}, {
												"name": "points",
												"value": 3.5
											}, {"name": "differential", "value": 234}, {
												"name": "streak",
												"value": 8
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/201/oklahoma-sooners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/201/oklahoma-sooners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/201",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/201",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/201",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/201",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:201&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/201",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/oklahoma-sooners-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "197",
									"uid": "s:20~l:23~t:197",
									"slug": "oklahoma-state-cowboys",
									"location": "Oklahoma State",
									"name": "Cowboys",
									"nickname": "Oklahoma St",
									"abbreviation": "OKST",
									"displayName": "Oklahoma State Cowboys",
									"shortDisplayName": "Cowboys",
									"color": "FF6500",
									"alternateColor": "ff9900",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/197.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/197.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "8-3",
											"stats": [{"name": "playoffSeed", "value": 3}, {
												"name": "wins",
												"value": 8
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.7272727489471436
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 332
											}, {"name": "pointsAgainst", "value": 258}, {
												"name": "avgPointsFor",
												"value": 30.18181800842285
											}, {"name": "avgPointsAgainst", "value": 23.454545974731445}, {
												"name": "points",
												"value": 2.5
											}, {"name": "differential", "value": 74}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/197/oklahoma-state-cowboys",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/197/oklahoma-state-cowboys",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/197",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/197",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/197",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/197",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:197&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/197",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/oklahoma-state-cowboys-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "295",
									"uid": "s:20~l:23~t:295",
									"slug": "old-dominion-monarchs",
									"location": "Old Dominion",
									"name": "Monarchs",
									"nickname": "Old Dominion",
									"abbreviation": "ODU",
									"displayName": "Old Dominion Monarchs",
									"shortDisplayName": "Monarchs",
									"color": "00507d",
									"alternateColor": "a1d2f1",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/295.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/295.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/295/old-dominion-monarchs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/295/old-dominion-monarchs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/295",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/295",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/295",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/295",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:295&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/295",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/old-dominion-monarchs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "145",
									"uid": "s:20~l:23~t:145",
									"slug": "ole-miss-rebels",
									"location": "Ole Miss",
									"name": "Rebels",
									"nickname": "Ole Miss",
									"abbreviation": "MISS",
									"displayName": "Ole Miss Rebels",
									"shortDisplayName": "Rebels",
									"color": "001148",
									"alternateColor": "00205b",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/145.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/145.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-5",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 392
											}, {"name": "pointsAgainst", "value": 383}, {
												"name": "avgPointsFor",
												"value": 39.20000076293945
											}, {"name": "avgPointsAgainst", "value": 38.29999923706055}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 9}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.20000000298023224
											}, {
												"name": "leagueWinPercent",
												"value": 0.4444444477558136
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/145/ole-miss-rebels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/145/ole-miss-rebels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/145",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/145",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/145",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/145",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:145&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/145",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ole-miss-rebels-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2483",
									"uid": "s:20~l:23~t:2483",
									"slug": "oregon-ducks",
									"location": "Oregon",
									"name": "Ducks",
									"nickname": "Oregon",
									"abbreviation": "ORE",
									"displayName": "Oregon Ducks",
									"shortDisplayName": "Ducks",
									"color": "044520",
									"alternateColor": "fee123",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2483.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-3",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.5714285969734192
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 219
											}, {"name": "pointsAgainst", "value": 198}, {
												"name": "avgPointsFor",
												"value": 31.285715103149414
											}, {"name": "avgPointsAgainst", "value": 28.285715103149414}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 21}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.6000000238418579
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2483/oregon-ducks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2483/oregon-ducks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2483",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2483",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2483",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2483",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2483&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2483",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/oregon-ducks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "204",
									"uid": "s:20~l:23~t:204",
									"slug": "oregon-state-beavers",
									"location": "Oregon State",
									"name": "Beavers",
									"nickname": "Oregon St",
									"abbreviation": "ORST",
									"displayName": "Oregon State Beavers",
									"shortDisplayName": "Beavers",
									"color": "c34500",
									"alternateColor": "dea076",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/204.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/204.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-5",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.2857142984867096
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 202
											}, {"name": "pointsAgainst", "value": 233}, {
												"name": "avgPointsFor",
												"value": 28.85714340209961
											}, {"name": "avgPointsAgainst", "value": 33.28571319580078}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -31}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.4000000059604645
											}, {
												"name": "leagueWinPercent",
												"value": 0.2857142984867096
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/204/oregon-state-beavers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/204/oregon-state-beavers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/204",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/204",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/204",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/204",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:204&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/204",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/oregon-state-beavers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "213",
									"uid": "s:20~l:23~t:213",
									"slug": "penn-state-nittany-lions",
									"location": "Penn State",
									"name": "Nittany Lions",
									"nickname": "Penn State",
									"abbreviation": "PSU",
									"displayName": "Penn State Nittany Lions",
									"shortDisplayName": "Nittany Lions",
									"color": "00265D",
									"alternateColor": "002e5c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/213.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-5",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.4444444477558136
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 268
											}, {"name": "pointsAgainst", "value": 249}, {
												"name": "avgPointsFor",
												"value": 29.77777862548828
											}, {"name": "avgPointsAgainst", "value": 27.66666603088379}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": 19}, {
												"name": "streak",
												"value": 4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.4444444477558136
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/213/penn-state-nittany-lions",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/213/penn-state-nittany-lions",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/213",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/213",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/213",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/213",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:213&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/213",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/penn-state-nittany-lions-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "221",
									"uid": "s:20~l:23~t:221",
									"slug": "pittsburgh-panthers",
									"location": "Pittsburgh",
									"name": "Panthers",
									"nickname": "Pittsburgh",
									"abbreviation": "PITT",
									"displayName": "Pittsburgh Panthers",
									"shortDisplayName": "Panthers",
									"color": "003263",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/221.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/221.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-5",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5454545617103577
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 319
											}, {"name": "pointsAgainst", "value": 270}, {
												"name": "avgPointsFor",
												"value": 29
											}, {"name": "avgPointsAgainst", "value": 24.545454025268555}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 49}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/221/pittsburgh-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/221/pittsburgh-panthers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/221",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/221",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/221",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/221",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:221&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/221",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/pittsburgh-panthers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2509",
									"uid": "s:20~l:23~t:2509",
									"slug": "purdue-boilermakers",
									"location": "Purdue",
									"name": "Boilermakers",
									"nickname": "Purdue",
									"abbreviation": "PUR",
									"displayName": "Purdue Boilermakers",
									"shortDisplayName": "Boilermakers",
									"color": "B89D29",
									"alternateColor": "a4a9ad",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2509.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-4",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 163
											}, {"name": "pointsAgainst", "value": 179}, {
												"name": "avgPointsFor",
												"value": 27.16666603088379
											}, {"name": "avgPointsAgainst", "value": 29.83333396911621}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -16}, {
												"name": "streak",
												"value": -4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.4000000059604645
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2509/purdue-boilermakers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2509/purdue-boilermakers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2509",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2509",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2509",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2509",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2509&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2509",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/purdue-boilermakers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "242",
									"uid": "s:20~l:23~t:242",
									"slug": "rice-owls",
									"location": "Rice",
									"name": "Owls",
									"nickname": "Rice",
									"abbreviation": "RICE",
									"displayName": "Rice Owls",
									"shortDisplayName": "Owls",
									"color": "003D7D",
									"alternateColor": "d1d5d8",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/242.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/242.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-3",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.4000000059604645
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 117
											}, {"name": "pointsAgainst", "value": 94}, {
												"name": "avgPointsFor",
												"value": 23.399999618530273
											}, {"name": "avgPointsAgainst", "value": 18.799999237060547}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": 23}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {
												"name": "leagueWinPercent",
												"value": 0.4000000059604645
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/242/rice-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/242/rice-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/242",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/242",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/242",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/242",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:242&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/242",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/rice-owls-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "164",
									"uid": "s:20~l:23~t:164",
									"slug": "rutgers-scarlet-knights",
									"location": "Rutgers",
									"name": "Scarlet Knights",
									"nickname": "Rutgers",
									"abbreviation": "RUTG",
									"displayName": "Rutgers Scarlet Knights",
									"shortDisplayName": "Scarlet Knights",
									"color": "d21034",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/164.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/164.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-6",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 240
											}, {"name": "pointsAgainst", "value": 289}, {
												"name": "avgPointsFor",
												"value": 26.66666603088379
											}, {"name": "avgPointsAgainst", "value": 32.11111068725586}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -49}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.3333333432674408
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/164/rutgers-scarlet-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/164/rutgers-scarlet-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/164",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/164",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/164",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/164",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:164&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/164",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/rutgers-scarlet-knights-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2567",
									"uid": "s:20~l:23~t:2567",
									"slug": "smu-mustangs",
									"location": "SMU",
									"name": "Mustangs",
									"nickname": "SMU",
									"abbreviation": "SMU",
									"displayName": "SMU Mustangs",
									"shortDisplayName": "Mustangs",
									"color": "E32F38",
									"alternateColor": "ecdcb9",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2567.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-3",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.699999988079071
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 386
											}, {"name": "pointsAgainst", "value": 309}, {
												"name": "avgPointsFor",
												"value": 38.599998474121094
											}, {"name": "avgPointsAgainst", "value": 30.899999618530273}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 77}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.5714285969734192
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2567/smu-mustangs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2567/smu-mustangs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2567",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2567",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2567",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2567",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2567&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2567",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/smu-mustangs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "21",
									"uid": "s:20~l:23~t:21",
									"slug": "san-diego-state-aztecs",
									"location": "San Diego State",
									"name": "Aztecs",
									"nickname": "San Diego State",
									"abbreviation": "SDSU",
									"displayName": "San Diego State Aztecs",
									"shortDisplayName": "Aztecs",
									"color": "BF2C37",
									"alternateColor": "a8996e",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/21.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/21.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 197
											}, {"name": "pointsAgainst", "value": 142}, {
												"name": "avgPointsFor",
												"value": 24.625
											}, {"name": "avgPointsAgainst", "value": 17.75}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 55}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/21/san-diego-state-aztecs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/21/san-diego-state-aztecs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/21",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/21",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/21",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/21",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:21&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/21",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/san-diego-state-aztecs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "23",
									"uid": "s:20~l:23~t:23",
									"slug": "san-jose-state-spartans",
									"location": "San José State",
									"name": "Spartans",
									"nickname": "San José State",
									"abbreviation": "SJSU",
									"displayName": "San José State Spartans",
									"shortDisplayName": "Spartans",
									"color": "005893",
									"alternateColor": "fdba31",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/23.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/23.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.875
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 229
											}, {"name": "pointsAgainst", "value": 159}, {
												"name": "avgPointsFor",
												"value": 28.625
											}, {"name": "avgPointsAgainst", "value": 19.875}, {
												"name": "points",
												"value": 3
											}, {"name": "differential", "value": 70}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/23/san-jose-state-spartans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/23/san-jose-state-spartans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/23",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/23",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/23",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/23",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:23&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/23",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/san-josé-state-spartans-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "6",
									"uid": "s:20~l:23~t:6",
									"slug": "south-alabama-jaguars",
									"location": "South Alabama",
									"name": "Jaguars",
									"nickname": "South Alabama",
									"abbreviation": "USA",
									"displayName": "South Alabama Jaguars",
									"shortDisplayName": "Jaguars",
									"color": "003E7E",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/6.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/6.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-7",
											"stats": [{"name": "playoffSeed", "value": 7}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.3636363744735718
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 219
											}, {"name": "pointsAgainst", "value": 300}, {
												"name": "avgPointsFor",
												"value": 19.909090042114258
											}, {"name": "avgPointsAgainst", "value": 27.272727966308594}, {
												"name": "points",
												"value": -1.5
											}, {"name": "differential", "value": -81}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.75
											}, {"name": "leagueWinPercent", "value": 0.375}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 3}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/6/south-alabama-jaguars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/6/south-alabama-jaguars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/6",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/6",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/6",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/6",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:6&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/6",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/south-alabama-jaguars-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2579",
									"uid": "s:20~l:23~t:2579",
									"slug": "south-carolina-gamecocks",
									"location": "South Carolina",
									"name": "Gamecocks",
									"nickname": "S Carolina",
									"abbreviation": "SC",
									"displayName": "South Carolina Gamecocks",
									"shortDisplayName": "Gamecocks",
									"color": "670010",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2579.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2579.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-8",
											"stats": [{"name": "playoffSeed", "value": 13}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 8}, {
												"name": "winPercent",
												"value": 0.20000000298023224
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 235
											}, {"name": "pointsAgainst", "value": 360}, {
												"name": "avgPointsFor",
												"value": 23.5
											}, {"name": "avgPointsAgainst", "value": 36}, {
												"name": "points",
												"value": -3
											}, {"name": "differential", "value": -125}, {
												"name": "streak",
												"value": -6
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.1666666716337204
											}, {
												"name": "leagueWinPercent",
												"value": 0.20000000298023224
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 5
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2579/south-carolina-gamecocks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2579/south-carolina-gamecocks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2579",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2579",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2579",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2579",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2579&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2579",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/south-carolina-gamecocks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "58",
									"uid": "s:20~l:23~t:58",
									"slug": "south-florida-bulls",
									"location": "South Florida",
									"name": "Bulls",
									"nickname": "USF",
									"abbreviation": "USF",
									"displayName": "South Florida Bulls",
									"shortDisplayName": "Bulls",
									"color": "004A36",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/58.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/58.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-8",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 8}, {
												"name": "winPercent",
												"value": 0.1111111119389534
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 208
											}, {"name": "pointsAgainst", "value": 359}, {
												"name": "avgPointsFor",
												"value": 23.11111068725586
											}, {"name": "avgPointsAgainst", "value": 39.88888931274414}, {
												"name": "points",
												"value": -3.5
											}, {"name": "differential", "value": -151}, {
												"name": "streak",
												"value": -8
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/58/south-florida-bulls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/58/south-florida-bulls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/58",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/58",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/58",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/58",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:58&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/58",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/south-florida-bulls-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2572",
									"uid": "s:20~l:23~t:2572",
									"slug": "southern-mississippi-golden-eagles",
									"location": "Southern Mississippi",
									"name": "Golden Eagles",
									"nickname": "Southern Miss",
									"abbreviation": "USM",
									"displayName": "Southern Mississippi Golden Eagles",
									"shortDisplayName": "Golden Eagles",
									"color": "FFAA3C",
									"alternateColor": "ffc423",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2572.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2572.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-7",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.30000001192092896
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 253
											}, {"name": "pointsAgainst", "value": 323}, {
												"name": "avgPointsFor",
												"value": 25.299999237060547
											}, {"name": "avgPointsAgainst", "value": 32.29999923706055}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -70}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.25
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2572/southern-mississippi-golden-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2572/southern-mississippi-golden-eagles",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2572",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2572",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2572",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2572",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2572&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2572",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/southern-mississippi-golden-eagles-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "24",
									"uid": "s:20~l:23~t:24",
									"slug": "stanford-cardinal",
									"location": "Stanford",
									"name": "Cardinal",
									"nickname": "Stanford",
									"abbreviation": "STAN",
									"displayName": "Stanford Cardinal",
									"shortDisplayName": "Cardinal",
									"color": "A80532",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/24.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/24.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-2",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 176
											}, {"name": "pointsAgainst", "value": 190}, {
												"name": "avgPointsFor",
												"value": 29.33333396911621
											}, {"name": "avgPointsAgainst", "value": 31.66666603088379}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": -14}, {
												"name": "streak",
												"value": 4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.75
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/24/stanford-cardinal",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/24/stanford-cardinal",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/24",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/24",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/24",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/24",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:24&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/24",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/stanford-cardinal-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "183",
									"uid": "s:20~l:23~t:183",
									"slug": "syracuse-orange",
									"location": "Syracuse",
									"name": "Orange",
									"nickname": "Syracuse",
									"abbreviation": "SYR",
									"displayName": "Syracuse Orange",
									"shortDisplayName": "Orange",
									"color": "F37321",
									"alternateColor": "0d1d37",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/183.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/183.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-10",
											"stats": [{"name": "playoffSeed", "value": 15}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 10}, {
												"name": "winPercent",
												"value": 0.09090909361839294
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 196
											}, {"name": "pointsAgainst", "value": 360}, {
												"name": "avgPointsFor",
												"value": 17.81818199157715
											}, {"name": "avgPointsAgainst", "value": 32.727272033691406}, {
												"name": "points",
												"value": -4.5
											}, {"name": "differential", "value": -164}, {
												"name": "streak",
												"value": -8
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.10000000149011612
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/183/syracuse-orange",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/183/syracuse-orange",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/183",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/183",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/183",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/183",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:183&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/183",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/syracuse-orange-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2628",
									"uid": "s:20~l:23~t:2628",
									"slug": "tcu-horned-frogs",
									"location": "TCU",
									"name": "Horned Frogs",
									"nickname": "TCU",
									"abbreviation": "TCU",
									"displayName": "TCU Horned Frogs",
									"shortDisplayName": "Horned Frogs",
									"color": "3C377D",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2628.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-4",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6000000238418579
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 308
											}, {"name": "pointsAgainst", "value": 242}, {
												"name": "avgPointsFor",
												"value": 30.799999237060547
											}, {"name": "avgPointsAgainst", "value": 24.200000762939453}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 66}, {
												"name": "streak",
												"value": 3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.5555555820465088
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2628/tcu-horned-frogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2628/tcu-horned-frogs",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2628",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2628",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2628",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2628",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2628&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2628",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/tcu-horned-frogs-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "218",
									"uid": "s:20~l:23~t:218",
									"slug": "temple-owls",
									"location": "Temple",
									"name": "Owls",
									"nickname": "Temple",
									"abbreviation": "TEM",
									"displayName": "Temple Owls",
									"shortDisplayName": "Owls",
									"color": "A80532",
									"alternateColor": "a7a9ac",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/218.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/218.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-6",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.1428571492433548
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 139
											}, {"name": "pointsAgainst", "value": 260}, {
												"name": "avgPointsFor",
												"value": 19.85714340209961
											}, {"name": "avgPointsAgainst", "value": 37.14285659790039}, {
												"name": "points",
												"value": -2.5
											}, {"name": "differential", "value": -121}, {
												"name": "streak",
												"value": -5
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.1428571492433548
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/218/temple-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/218/temple-owls",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/218",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/218",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/218",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/218",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:218&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/218",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/temple-owls-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2633",
									"uid": "s:20~l:23~t:2633",
									"slug": "tennessee-volunteers",
									"location": "Tennessee",
									"name": "Volunteers",
									"nickname": "Tennessee",
									"abbreviation": "TENN",
									"displayName": "Tennessee Volunteers",
									"shortDisplayName": "Volunteers",
									"color": "EE9627",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2633.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-7",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.30000001192092896
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 215
											}, {"name": "pointsAgainst", "value": 301}, {
												"name": "avgPointsFor",
												"value": 21.5
											}, {"name": "avgPointsAgainst", "value": 30.100000381469727}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -86}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.30000001192092896
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 3
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2633/tennessee-volunteers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2633/tennessee-volunteers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2633",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2633",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2633",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2633",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2633&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2633",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/tennessee-volunteers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "245",
									"uid": "s:20~l:23~t:245",
									"slug": "texas-am-aggies",
									"location": "Texas A&M",
									"name": "Aggies",
									"nickname": "Texas A&M",
									"abbreviation": "TA&M",
									"displayName": "Texas A&M Aggies",
									"shortDisplayName": "Aggies",
									"color": "5C0025",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/245.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "9-1",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 9
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.8999999761581421
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 326
											}, {"name": "pointsAgainst", "value": 217}, {
												"name": "avgPointsFor",
												"value": 32.599998474121094
											}, {"name": "avgPointsAgainst", "value": 21.700000762939453}, {
												"name": "points",
												"value": 4
											}, {"name": "differential", "value": 109}, {
												"name": "streak",
												"value": 8
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.800000011920929
											}, {
												"name": "leagueWinPercent",
												"value": 0.8888888955116272
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 4
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/245/texas-am-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/245/texas-am-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/245",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/245",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/245",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/245",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:245&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/245",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/texas-a&m-aggies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "251",
									"uid": "s:20~l:23~t:251",
									"slug": "texas-longhorns",
									"location": "Texas",
									"name": "Longhorns",
									"nickname": "Texas",
									"abbreviation": "TEX",
									"displayName": "Texas Longhorns",
									"shortDisplayName": "Longhorns",
									"color": "EE7524",
									"alternateColor": "f0f0f0",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/251.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-3",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.699999988079071
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 2}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 427
											}, {"name": "pointsAgainst", "value": 285}, {
												"name": "avgPointsFor",
												"value": 42.70000076293945
											}, {"name": "avgPointsAgainst", "value": 28.5}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 142}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.625}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/251/texas-longhorns",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/251/texas-longhorns",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/251",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/251",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/251",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/251",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:251&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/251",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/texas-longhorns-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "326",
									"uid": "s:20~l:23~t:326",
									"slug": "texas-state-bobcats",
									"location": "Texas State",
									"name": "Bobcats",
									"nickname": "Texas State",
									"abbreviation": "TXST",
									"displayName": "Texas State Bobcats",
									"shortDisplayName": "Bobcats",
									"color": "4e1719",
									"alternateColor": "b4975a",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/326.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/326.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-10",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 10}, {
												"name": "winPercent",
												"value": 0.1666666716337204
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 332
											}, {"name": "pointsAgainst", "value": 458}, {
												"name": "avgPointsFor",
												"value": 27.66666603088379
											}, {"name": "avgPointsAgainst", "value": 38.16666793823242}, {
												"name": "points",
												"value": -4
											}, {"name": "differential", "value": -126}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/326/texas-state-bobcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/326/texas-state-bobcats",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/326",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/326",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/326",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/326",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:326&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/326",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/texas-state-bobcats-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2641",
									"uid": "s:20~l:23~t:2641",
									"slug": "texas-tech-red-raiders",
									"location": "Texas Tech",
									"name": "Red Raiders",
									"nickname": "Texas Tech",
									"abbreviation": "TTU",
									"displayName": "Texas Tech Red Raiders",
									"shortDisplayName": "Red Raiders",
									"color": "C80025",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2641.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-6",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4000000059604645
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 291
											}, {"name": "pointsAgainst", "value": 367}, {
												"name": "avgPointsFor",
												"value": 29.100000381469727
											}, {"name": "avgPointsAgainst", "value": 36.70000076293945}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -76}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2641/texas-tech-red-raiders",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2641/texas-tech-red-raiders",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2641",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2641",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2641",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2641",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2641&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2641",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/texas-tech-red-raiders-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2649",
									"uid": "s:20~l:23~t:2649",
									"slug": "toledo-rockets",
									"location": "Toledo",
									"name": "Rockets",
									"nickname": "Toledo",
									"abbreviation": "TOL",
									"displayName": "Toledo Rockets",
									"shortDisplayName": "Rockets",
									"color": "00488F",
									"alternateColor": "ffd51d",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2649.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2649.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-2",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 210
											}, {"name": "pointsAgainst", "value": 146}, {
												"name": "avgPointsFor",
												"value": 35
											}, {"name": "avgPointsAgainst", "value": 24.33333396911621}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 64}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6000000238418579
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2649/toledo-rockets",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2649/toledo-rockets",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2649",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2649",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2649",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2649",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2649&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2649",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/toledo-rockets-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2653",
									"uid": "s:20~l:23~t:2653",
									"slug": "troy-trojans",
									"location": "Troy",
									"name": "Trojans",
									"nickname": "Troy",
									"abbreviation": "TROY",
									"displayName": "Troy Trojans",
									"shortDisplayName": "Trojans",
									"color": "AE0210",
									"alternateColor": "88898c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2653.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2653.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-6",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4545454680919647
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 301
											}, {"name": "pointsAgainst", "value": 283}, {
												"name": "avgPointsFor",
												"value": 27.363636016845703
											}, {"name": "avgPointsAgainst", "value": 25.727272033691406}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": 18}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 4
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2653/troy-trojans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2653/troy-trojans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2653",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2653",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2653",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2653",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2653&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2653",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/troy-trojans-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2655",
									"uid": "s:20~l:23~t:2655",
									"slug": "tulane-green-wave",
									"location": "Tulane",
									"name": "Green Wave",
									"nickname": "Tulane",
									"abbreviation": "TULN",
									"displayName": "Tulane Green Wave",
									"shortDisplayName": "Green Wave",
									"color": "005837",
									"alternateColor": "3baf29",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2655.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2655.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-6",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 2
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 416
											}, {"name": "pointsAgainst", "value": 337}, {
												"name": "avgPointsFor",
												"value": 34.66666793823242
											}, {"name": "avgPointsAgainst", "value": 28.08333396911621}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 79}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.375}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2655/tulane-green-wave",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2655/tulane-green-wave",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2655",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2655",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2655",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2655",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2655&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2655",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/tulane-green-wave-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "202",
									"uid": "s:20~l:23~t:202",
									"slug": "tulsa-golden-hurricane",
									"location": "Tulsa",
									"name": "Golden Hurricane",
									"nickname": "Tulsa",
									"abbreviation": "TLSA",
									"displayName": "Tulsa Golden Hurricane",
									"shortDisplayName": "Golden Hurricane",
									"color": "004371",
									"alternateColor": "ee3b33",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/202.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/202.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-3",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 244
											}, {"name": "pointsAgainst", "value": 194}, {
												"name": "avgPointsFor",
												"value": 27.11111068725586
											}, {"name": "avgPointsAgainst", "value": 21.55555534362793}, {
												"name": "points",
												"value": 1.5
											}, {"name": "differential", "value": 50}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/202/tulsa-golden-hurricane",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/202/tulsa-golden-hurricane",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/202",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/202",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/202",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/202",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:202&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/202",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/tulsa-golden-hurricane-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "5",
									"uid": "s:20~l:23~t:5",
									"slug": "uab-blazers",
									"location": "UAB",
									"name": "Blazers",
									"nickname": "UAB",
									"abbreviation": "UAB",
									"displayName": "UAB Blazers",
									"shortDisplayName": "Blazers",
									"color": "003b28",
									"alternateColor": "ffc845",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/5.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/5.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-3",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 256
											}, {"name": "pointsAgainst", "value": 193}, {
												"name": "avgPointsFor",
												"value": 28.44444465637207
											}, {"name": "avgPointsAgainst", "value": 21.44444465637207}, {
												"name": "points",
												"value": 1.5
											}, {"name": "differential", "value": 63}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6666666865348816
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/5/uab-blazers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/5/uab-blazers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/5",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/5",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/5",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/5",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:5&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/5",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/uab-blazers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2116",
									"uid": "s:20~l:23~t:2116",
									"slug": "ucf-knights",
									"location": "UCF",
									"name": "Knights",
									"nickname": "UCF",
									"abbreviation": "UCF",
									"displayName": "UCF Knights",
									"shortDisplayName": "Knights",
									"color": "000000",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2116.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2116.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6000000238418579
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 422
											}, {"name": "pointsAgainst", "value": 332}, {
												"name": "avgPointsFor",
												"value": 42.20000076293945
											}, {"name": "avgPointsAgainst", "value": 33.20000076293945}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 90}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.625}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2116/ucf-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2116/ucf-knights",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2116",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2116",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2116",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2116",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2116&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2116",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ucf-knights-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "26",
									"uid": "s:20~l:23~t:26",
									"slug": "ucla-bruins",
									"location": "UCLA",
									"name": "Bruins",
									"nickname": "UCLA",
									"abbreviation": "UCLA",
									"displayName": "UCLA Bruins",
									"shortDisplayName": "Bruins",
									"color": "005C8E",
									"alternateColor": "ffc72c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/26.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/26.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-4",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.4285714328289032
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 248
											}, {"name": "pointsAgainst", "value": 215}, {
												"name": "avgPointsFor",
												"value": 35.42856979370117
											}, {"name": "avgPointsAgainst", "value": 30.714284896850586}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": 33}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 2
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/26/ucla-bruins",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/26/ucla-bruins",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/26",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/26",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/26",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/26",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:26&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/26",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ucla-bruins-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "41",
									"uid": "s:20~l:23~t:41",
									"slug": "uconn-huskies",
									"location": "UConn",
									"name": "Huskies",
									"nickname": "UConn",
									"abbreviation": "UCONN",
									"displayName": "UConn Huskies",
									"shortDisplayName": "Huskies",
									"color": "001d40",
									"alternateColor": "f1f2f3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/41.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/41.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/41/uconn-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/41/uconn-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/41",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/41",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/41",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/41",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:41&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/41",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/uconn-huskies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2433",
									"uid": "s:20~l:23~t:2433",
									"slug": "ul-monroe-warhawks",
									"location": "UL Monroe",
									"name": "Warhawks",
									"nickname": "UL Monroe",
									"abbreviation": "ULM",
									"displayName": "UL Monroe Warhawks",
									"shortDisplayName": "Warhawks",
									"color": "231F20",
									"alternateColor": "b18445",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2433.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2433.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-10",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 10}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 163
											}, {"name": "pointsAgainst", "value": 420}, {
												"name": "avgPointsFor",
												"value": 16.299999237060547
											}, {"name": "avgPointsAgainst", "value": 42}, {
												"name": "points",
												"value": -5
											}, {"name": "differential", "value": -257}, {
												"name": "streak",
												"value": -10
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 4}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2433/ul-monroe-warhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2433/ul-monroe-warhawks",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2433",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2433",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2433",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2433",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2433&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2433",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/ul-monroe-warhawks-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "113",
									"uid": "s:20~l:23~t:113",
									"slug": "umass-minutemen",
									"location": "UMass",
									"name": "Minutemen",
									"nickname": "UMass",
									"abbreviation": "MASS",
									"displayName": "UMass Minutemen",
									"shortDisplayName": "Minutemen",
									"color": "880007",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/113.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/113.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-4",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 12
											}, {"name": "pointsAgainst", "value": 161}, {
												"name": "avgPointsFor",
												"value": 3
											}, {"name": "avgPointsAgainst", "value": 40.25}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -149}, {
												"name": "streak",
												"value": -4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/113/umass-minutemen",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/113/umass-minutemen",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/113",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/113",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/113",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/113",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:113&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/113",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/umass-minutemen-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2439",
									"uid": "s:20~l:23~t:2439",
									"slug": "unlv-rebels",
									"location": "UNLV",
									"name": "Rebels",
									"nickname": "UNLV",
									"abbreviation": "UNLV",
									"displayName": "UNLV Rebels",
									"shortDisplayName": "Rebels",
									"color": "000000",
									"alternateColor": "c2c4c6",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2439.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2439.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-6",
											"stats": [{"name": "playoffSeed", "value": 12}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 104
											}, {"name": "pointsAgainst", "value": 228}, {
												"name": "avgPointsFor",
												"value": 17.33333396911621
											}, {"name": "avgPointsAgainst", "value": 38}, {
												"name": "points",
												"value": -3
											}, {"name": "differential", "value": -124}, {
												"name": "streak",
												"value": -6
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2439/unlv-rebels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2439/unlv-rebels",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2439",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2439",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2439",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2439",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2439&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2439",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/unlv-rebels-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "30",
									"uid": "s:20~l:23~t:30",
									"slug": "usc-trojans",
									"location": "USC",
									"name": "Trojans",
									"nickname": "USC",
									"abbreviation": "USC",
									"displayName": "USC Trojans",
									"shortDisplayName": "Trojans",
									"color": "AE2531",
									"alternateColor": "ffc72c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/30.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/30.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-1",
											"stats": [{"name": "playoffSeed", "value": 1}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.8333333134651184
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 200
											}, {"name": "pointsAgainst", "value": 156}, {
												"name": "avgPointsFor",
												"value": 33.33333206176758
											}, {"name": "avgPointsAgainst", "value": 26}, {
												"name": "points",
												"value": 2
											}, {"name": "differential", "value": 44}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 1
											}, {"name": "leagueWinPercent", "value": 1}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 4}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/30/usc-trojans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/30/usc-trojans",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/30",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/30",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/30",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/30",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:30&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/30",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/usc-trojans-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2638",
									"uid": "s:20~l:23~t:2638",
									"slug": "utep-miners",
									"location": "UTEP",
									"name": "Miners",
									"nickname": "UTEP",
									"abbreviation": "UTEP",
									"displayName": "UTEP Miners",
									"shortDisplayName": "Miners",
									"color": "ff8200",
									"alternateColor": "041e42",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2638.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2638.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-5",
											"stats": [{"name": "playoffSeed", "value": 13}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.375
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 8}, {
												"name": "pointsFor",
												"value": 184
											}, {"name": "pointsAgainst", "value": 248}, {
												"name": "avgPointsFor",
												"value": 23
											}, {"name": "avgPointsAgainst", "value": 31}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -64}, {
												"name": "streak",
												"value": -4
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 3}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2638/utep-miners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2638/utep-miners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2638",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2638",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2638",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2638",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2638&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2638",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/utep-miners-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2636",
									"uid": "s:20~l:23~t:2636",
									"slug": "utsa-roadrunners",
									"location": "UTSA",
									"name": "Roadrunners",
									"nickname": "UTSA",
									"abbreviation": "UTSA",
									"displayName": "UTSA Roadrunners",
									"shortDisplayName": "Roadrunners",
									"color": "002A5C",
									"alternateColor": "f47321",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2636.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2636.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "7-5",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 7
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5833333134651184
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 339
											}, {"name": "pointsAgainst", "value": 308}, {
												"name": "avgPointsFor",
												"value": 28.25
											}, {"name": "avgPointsAgainst", "value": 25.66666603088379}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 31}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.800000011920929
											}, {
												"name": "leagueWinPercent",
												"value": 0.7142857313156128
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 4
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2636/utsa-roadrunners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2636/utsa-roadrunners",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2636",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2636",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2636",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2636",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2636&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2636",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/utsa-roadrunners-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "328",
									"uid": "s:20~l:23~t:328",
									"slug": "utah-state-aggies",
									"location": "Utah State",
									"name": "Aggies",
									"nickname": "Utah State",
									"abbreviation": "USU",
									"displayName": "Utah State Aggies",
									"shortDisplayName": "Aggies",
									"color": "003263",
									"alternateColor": "949ca1",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/328.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/328.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-5",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.1666666716337204
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 93
											}, {"name": "pointsAgainst", "value": 211}, {
												"name": "avgPointsFor",
												"value": 15.5
											}, {"name": "avgPointsAgainst", "value": 35.16666793823242}, {
												"name": "points",
												"value": -2
											}, {"name": "differential", "value": -118}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.1666666716337204
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/328/utah-state-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/328/utah-state-aggies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/328",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/328",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/328",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/328",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:328&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/328",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/utah-state-aggies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "254",
									"uid": "s:20~l:23~t:254",
									"slug": "utah-utes",
									"location": "Utah",
									"name": "Utes",
									"nickname": "Utah",
									"abbreviation": "UTAH",
									"displayName": "Utah Utes",
									"shortDisplayName": "Utes",
									"color": "890012",
									"alternateColor": "7e8083",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/254.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/254.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-2",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.6000000238418579
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 5}, {
												"name": "pointsFor",
												"value": 151
											}, {"name": "pointsAgainst", "value": 130}, {
												"name": "avgPointsFor",
												"value": 30.200000762939453
											}, {"name": "avgPointsAgainst", "value": 26}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 21}, {
												"name": "streak",
												"value": 3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {
												"name": "leagueWinPercent",
												"value": 0.6000000238418579
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 1
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 1
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/254/utah-utes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/254/utah-utes",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/254",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/254",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/254",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/254",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:254&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/254",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/utah-utes-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "238",
									"uid": "s:20~l:23~t:238",
									"slug": "vanderbilt-commodores",
									"location": "Vanderbilt",
									"name": "Commodores",
									"nickname": "Vanderbilt",
									"abbreviation": "VAN",
									"displayName": "Vanderbilt Commodores",
									"shortDisplayName": "Commodores",
									"color": "000000",
									"alternateColor": "231f20",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/238.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/238.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "0-9",
											"stats": [{"name": "playoffSeed", "value": 14}, {
												"name": "wins",
												"value": 0
											}, {"name": "losses", "value": 9}, {
												"name": "winPercent",
												"value": 0
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 133
											}, {"name": "pointsAgainst", "value": 336}, {
												"name": "avgPointsFor",
												"value": 14.777777671813965
											}, {"name": "avgPointsAgainst", "value": 37.33333206176758}, {
												"name": "points",
												"value": -4.5
											}, {"name": "differential", "value": -203}, {
												"name": "streak",
												"value": -9
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 5}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/238/vanderbilt-commodores",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/238/vanderbilt-commodores",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/238",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/238",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/238",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/238",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:238&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/238",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/vanderbilt-commodores-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "258",
									"uid": "s:20~l:23~t:258",
									"slug": "virginia-cavaliers",
									"location": "Virginia",
									"name": "Cavaliers",
									"nickname": "Virginia",
									"abbreviation": "UVA",
									"displayName": "Virginia Cavaliers",
									"shortDisplayName": "Cavaliers",
									"color": "f84c1e",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/258.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-5",
											"stats": [{"name": "playoffSeed", "value": 9}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.5
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 307
											}, {"name": "pointsAgainst", "value": 296}, {
												"name": "avgPointsFor",
												"value": 30.700000762939453
											}, {"name": "avgPointsAgainst", "value": 29.600000381469727}, {
												"name": "points",
												"value": 0
											}, {"name": "differential", "value": 11}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.4444444477558136
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/258/virginia-cavaliers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/258/virginia-cavaliers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/258",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/258",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/258",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/258",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:258&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/258",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/virginia-cavaliers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "259",
									"uid": "s:20~l:23~t:259",
									"slug": "virginia-tech-hokies",
									"location": "Virginia Tech",
									"name": "Hokies",
									"nickname": "Virginia Tech",
									"abbreviation": "VT",
									"displayName": "Virginia Tech Hokies",
									"shortDisplayName": "Hokies",
									"color": "74232D",
									"alternateColor": "c2c1ba",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/259.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-6",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 6}, {
												"name": "winPercent",
												"value": 0.4545454680919647
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 11}, {
												"name": "pointsFor",
												"value": 342
											}, {"name": "pointsAgainst", "value": 353}, {
												"name": "avgPointsFor",
												"value": 31.090909957885742
											}, {"name": "avgPointsAgainst", "value": 32.09090805053711}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": -11}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/259/virginia-tech-hokies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/259/virginia-tech-hokies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/259",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/259",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/259",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/259",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:259&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/259",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/virginia-tech-hokies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "154",
									"uid": "s:20~l:23~t:154",
									"slug": "wake-forest-demon-deacons",
									"location": "Wake Forest",
									"name": "Demon Deacons",
									"nickname": "Wake Forest",
									"abbreviation": "WAKE",
									"displayName": "Wake Forest Demon Deacons",
									"shortDisplayName": "Demon Deacons",
									"color": "9E7E38",
									"alternateColor": "000000",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/154.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-5",
											"stats": [{"name": "playoffSeed", "value": 10}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 5}, {
												"name": "winPercent",
												"value": 0.4444444477558136
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 9}, {
												"name": "pointsFor",
												"value": 324
											}, {"name": "pointsAgainst", "value": 295}, {
												"name": "avgPointsFor",
												"value": 36
											}, {"name": "avgPointsAgainst", "value": 32.77777862548828}, {
												"name": "points",
												"value": -0.5
											}, {"name": "differential", "value": 29}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.4285714328289032
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/154/wake-forest-demon-deacons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/154/wake-forest-demon-deacons",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/154",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/154",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/154",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/154",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:154&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/154",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/wake-forest-demon-deacons-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "264",
									"uid": "s:20~l:23~t:264",
									"slug": "washington-huskies",
									"location": "Washington",
									"name": "Huskies",
									"nickname": "Washington",
									"abbreviation": "WASH",
									"displayName": "Washington Huskies",
									"shortDisplayName": "Huskies",
									"color": "2B2F64",
									"alternateColor": "e8e3d3",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/264.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/264.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "3-1",
											"stats": [{"name": "playoffSeed", "value": 2}, {
												"name": "wins",
												"value": 3
											}, {"name": "losses", "value": 1}, {
												"name": "winPercent",
												"value": 0.75
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 121
											}, {"name": "pointsAgainst", "value": 100}, {
												"name": "avgPointsFor",
												"value": 30.25
											}, {"name": "avgPointsAgainst", "value": 25}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 21}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.75}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/264/washington-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/264/washington-huskies",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/264",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/264",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/264",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/264",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:264&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/264",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/washington-huskies-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "265",
									"uid": "s:20~l:23~t:265",
									"slug": "washington-state-cougars",
									"location": "Washington State",
									"name": "Cougars",
									"nickname": "Washington St",
									"abbreviation": "WSU",
									"displayName": "Washington State Cougars",
									"shortDisplayName": "Cougars",
									"color": "94022a",
									"alternateColor": "6a747c",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/265.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/265.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "1-3",
											"stats": [{"name": "playoffSeed", "value": 11}, {
												"name": "wins",
												"value": 1
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.25
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 4}, {
												"name": "pointsFor",
												"value": 108
											}, {"name": "pointsAgainst", "value": 154}, {
												"name": "avgPointsFor",
												"value": 27
											}, {"name": "avgPointsAgainst", "value": 38.5}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -46}, {
												"name": "streak",
												"value": -3
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.25}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 1}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 1}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/265/washington-state-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/265/washington-state-cougars",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/265",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/265",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/265",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/265",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:265&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/265",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/washington-state-cougars-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "277",
									"uid": "s:20~l:23~t:277",
									"slug": "west-virginia-mountaineers",
									"location": "West Virginia",
									"name": "Mountaineers",
									"nickname": "West Virginia",
									"abbreviation": "WVU",
									"displayName": "West Virginia Mountaineers",
									"shortDisplayName": "Mountaineers",
									"color": "FFC600",
									"alternateColor": "eaaa00",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/277.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/277.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "6-4",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 6
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.6000000238418579
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 10}, {
												"name": "pointsFor",
												"value": 265
											}, {"name": "pointsAgainst", "value": 205}, {
												"name": "avgPointsFor",
												"value": 26.5
											}, {"name": "avgPointsAgainst", "value": 20.5}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 60}, {
												"name": "streak",
												"value": 1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 0}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 0}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/277/west-virginia-mountaineers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/277/west-virginia-mountaineers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/277",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/277",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/277",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/277",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:277&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/277",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/west-virginia-mountaineers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "98",
									"uid": "s:20~l:23~t:98",
									"slug": "western-kentucky-hilltoppers",
									"location": "Western Kentucky",
									"name": "Hilltoppers",
									"nickname": "W Kentucky",
									"abbreviation": "WKU",
									"displayName": "Western Kentucky Hilltoppers",
									"shortDisplayName": "Hilltoppers",
									"color": "F32026",
									"alternateColor": "b3b5b8",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/98.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/98.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "5-7",
											"stats": [{"name": "playoffSeed", "value": 6}, {
												"name": "wins",
												"value": 5
											}, {"name": "losses", "value": 7}, {
												"name": "winPercent",
												"value": 0.4166666567325592
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 12}, {
												"name": "pointsFor",
												"value": 228
											}, {"name": "pointsAgainst", "value": 304}, {
												"name": "avgPointsFor",
												"value": 19
											}, {"name": "avgPointsAgainst", "value": 25.33333396911621}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": -76}, {
												"name": "streak",
												"value": -1
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6000000238418579
											}, {
												"name": "leagueWinPercent",
												"value": 0.5714285969734192
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/98/western-kentucky-hilltoppers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/98/western-kentucky-hilltoppers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/98",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/98",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/98",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/98",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:98&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/98",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/western-kentucky-hilltoppers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2711",
									"uid": "s:20~l:23~t:2711",
									"slug": "western-michigan-broncos",
									"location": "Western Michigan",
									"name": "Broncos",
									"nickname": "W Michigan",
									"abbreviation": "WMU",
									"displayName": "Western Michigan Broncos",
									"shortDisplayName": "Broncos",
									"color": "B59966",
									"alternateColor": "bfa979",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2711.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2711.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-2",
											"stats": [{"name": "playoffSeed", "value": 4}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 2}, {
												"name": "winPercent",
												"value": 0.6666666865348816
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 250
											}, {"name": "pointsAgainst", "value": 205}, {
												"name": "avgPointsFor",
												"value": 41.66666793823242
											}, {"name": "avgPointsAgainst", "value": 34.16666793823242}, {
												"name": "points",
												"value": 1
											}, {"name": "differential", "value": 45}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.6000000238418579
											}, {
												"name": "leagueWinPercent",
												"value": 0.6666666865348816
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 3
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 2
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2711/western-michigan-broncos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2711/western-michigan-broncos",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2711",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2711",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2711",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2711",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2711&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2711",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/western-michigan-broncos-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "275",
									"uid": "s:20~l:23~t:275",
									"slug": "wisconsin-badgers",
									"location": "Wisconsin",
									"name": "Badgers",
									"nickname": "Wisconsin",
									"abbreviation": "WISC",
									"displayName": "Wisconsin Badgers",
									"shortDisplayName": "Badgers",
									"color": "A00001",
									"alternateColor": "f7f7f7",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/275.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/275.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "4-3",
											"stats": [{"name": "playoffSeed", "value": 5}, {
												"name": "wins",
												"value": 4
											}, {"name": "losses", "value": 3}, {
												"name": "winPercent",
												"value": 0.5714285969734192
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 1}, {
												"name": "OTLosses",
												"value": 0
											}, {"name": "gamesPlayed", "value": 7}, {
												"name": "pointsFor",
												"value": 176
											}, {"name": "pointsAgainst", "value": 122}, {
												"name": "avgPointsFor",
												"value": 25.14285659790039
											}, {"name": "avgPointsAgainst", "value": 17.428571701049805}, {
												"name": "points",
												"value": 0.5
											}, {"name": "differential", "value": 54}, {
												"name": "streak",
												"value": 2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0.5
											}, {"name": "leagueWinPercent", "value": 0.5}, {
												"name": "divisionRecord",
												"value": 0
											}, {"name": "divisionWins", "value": 2}, {
												"name": "divisionTies",
												"value": 0
											}, {"name": "divisionLosses", "value": 2}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/275/wisconsin-badgers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/275/wisconsin-badgers",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/275",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/275",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/275",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/275",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:275&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/275",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/wisconsin-badgers-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}, {
								"team": {
									"id": "2751",
									"uid": "s:20~l:23~t:2751",
									"slug": "wyoming-cowboys",
									"location": "Wyoming",
									"name": "Cowboys",
									"nickname": "Wyoming",
									"abbreviation": "WYO",
									"displayName": "Wyoming Cowboys",
									"shortDisplayName": "Cowboys",
									"color": "533B22",
									"alternateColor": "ffffff",
									"isActive": true,
									"isAllStar": false,
									"logos": [{
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500/2751.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "default"]
									}, {
										"href": "https://a.espncdn.com/i/teamlogos/ncaa/500-dark/2751.png",
										"width": 500,
										"height": 500,
										"alt": "",
										"rel": ["full", "dark"]
									}],
									"record": {
										"items": [{
											"summary": "2-4",
											"stats": [{"name": "playoffSeed", "value": 8}, {
												"name": "wins",
												"value": 2
											}, {"name": "losses", "value": 4}, {
												"name": "winPercent",
												"value": 0.3333333432674408
											}, {"name": "gamesBehind", "value": 0}, {
												"name": "ties",
												"value": 0
											}, {"name": "OTWins", "value": 0}, {
												"name": "OTLosses",
												"value": 1
											}, {"name": "gamesPlayed", "value": 6}, {
												"name": "pointsFor",
												"value": 159
											}, {"name": "pointsAgainst", "value": 126}, {
												"name": "avgPointsFor",
												"value": 26.5
											}, {"name": "avgPointsAgainst", "value": 21}, {
												"name": "points",
												"value": -1
											}, {"name": "differential", "value": 33}, {
												"name": "streak",
												"value": -2
											}, {"name": "clincher", "value": 0}, {
												"name": "divisionWinPercent",
												"value": 0
											}, {
												"name": "leagueWinPercent",
												"value": 0.3333333432674408
											}, {"name": "divisionRecord", "value": 0}, {
												"name": "divisionWins",
												"value": 0
											}, {"name": "divisionTies", "value": 0}, {
												"name": "divisionLosses",
												"value": 0
											}]
										}]
									},
									"links": [{
										"language": "en-US",
										"rel": ["clubhouse", "desktop", "team"],
										"href": "https://www.espn.com/college-football/team/_/id/2751/wyoming-cowboys",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["clubhouse", "mobile", "team"],
										"href": "http://www.espn.com/college-football/team/_/id/2751/wyoming-cowboys",
										"text": "Clubhouse",
										"shortText": "Clubhouse",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["roster", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/roster/_/id/2751",
										"text": "Roster",
										"shortText": "Roster",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["stats", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/stats/_/id/2751",
										"text": "Statistics",
										"shortText": "Statistics",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["schedule", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/schedule/_/id/2751",
										"text": "Schedule",
										"shortText": "Schedule",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["photos", "desktop", "team"],
										"href": "http://www.espn.com/college-football/team/photos/_/id/2751",
										"text": "photos",
										"shortText": "photos",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["scores", "sportscenter", "app", "team"],
										"href": "sportscenter://x-callback-url/showClubhouse?uid=s:20~l:23~t:2751&section=scores",
										"text": "Scores",
										"shortText": "Scores",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en-US",
										"rel": ["awards", "desktop", "team"],
										"href": "http://www.espn.com/college-football/awards/_/team/2751",
										"text": "Awards",
										"shortText": "Awards",
										"isExternal": false,
										"isPremium": false
									}, {
										"language": "en",
										"rel": ["tickets", "desktop", "team"],
										"href": "https://www.vividseats.com/ncaaf/wyoming-cowboys-tickets.html?wsUser=717",
										"text": "Tickets",
										"isExternal": true,
										"isPremium": false
									}]
								}
							}]
						}]
					}]
			}
		,
		"status":
			200, "statusText":
			"OK", "headers":
			{
				"cache-control":
					"max-age=10", "content-length":
					"25421", "content-type":
					"application/json;charset=UTF-8", "expires":
					"Mon, 10 May 2021 21:08:39 GMT", "pragma":
					"no-cache"
			}
		,
		"config":
			{
				"url":
					"http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?groups=80&limit=200",
				"headers":
					{
						"Accept":
							"application/json, text/plain, */*"
					}
				,
				"transformRequest":
					[null],
				"transformResponse":
					[null],
				"timeout":
					0,
				"xsrfCookieName":
					"XSRF-TOKEN",
				"xsrfHeaderName":
					"X-XSRF-TOKEN",
				"maxContentLength":
					-1,
				"maxBodyLength":
					-1,
				"method":
					"get"
			}
		,
		"request":
			{}
	}
}
