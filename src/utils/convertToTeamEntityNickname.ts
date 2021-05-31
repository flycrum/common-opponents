/**
 * Converts team nickname discrepancies from `Sports Reference` to `ESPN`.
 */
const nicknameAlternativeLookup: {[nickname: string]: string} = {
	'Alabama-Birmingham': 'UAB',
	'Appalachian State': 'Appalachian St',
	'Bowling Green State': 'Bowling Green',
	'Brigham Young': 'BYU',
	'California': 'Cal',
	'Central Florida': 'UCF',
	'Central Michigan': 'Cent Michigan',
	'Coastal Carolina': 'C. Carolina',
	'Eastern Michigan': 'E Michigan',
	'Florida Atlantic': 'FAU',
	'Florida International': 'Florida Intl',
	'Georgia Southern': 'Ga Southern',
	'Hawaii': `Hawai'i`,
	'Louisiana-Monroe': 'UL Monroe',
	'Louisiana State': 'LSU',
	'Massachusetts': 'UMass',
	'Miami (FL)': 'Miami',
	'Michigan State': 'Mich. St.',
	'Middle Tennessee State': 'Mid Tennessee',
	'Mississippi': 'Ole Miss',
	'Mississippi State': 'Mississippi St',
	'Nevada-Las Vegas': 'UNLV',
	'New Mexico State': 'New Mexico St',
	'North Carolina State': 'NC State',
	'Northern Illinois': 'N Illinois',
	'Oklahoma State': 'Oklahoma St',
	'Oregon State': 'Oregon St',
	'San Jose State': 'San José State',
	'South Carolina': 'S Carolina',
	'Southern California': 'USC',
	'Southern Methodist': 'SMU',
	'Southern Mississippi': 'Southern Miss',
	'South Florida': 'USF',
	'Texas Christian': 'TCU',
	'Texas-El Paso': 'UTEP',
	'Texas-San Antonio': 'UTSA',
	'Washington State': 'Washington St',
	'Western Kentucky': 'W Kentucky',
	'Western Michigan': 'W Michigan',
};

export function convertToTeamEntityNickname(nickname: string) {
	return nicknameAlternativeLookup[nickname] ?? nickname;
}
