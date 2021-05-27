import React from 'react';
import {
	Button,
	GridItem,
} from '@chakra-ui/react';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import { TeamLogo } from '../components/TeamLogo';
import { TEAMS_LIST_ROW_HEIGHT } from '../components/TeamsList';
import type { GridItemProps } from '@chakra-ui/layout/dist/types/grid';

/**
 * This is the team selector button used on the faceoff screen that updates to reflect selected team.
 * @param colSpan the number of columns the grid item should span
 * @param onClick callback for when the underlying button is clicked
 * @param team the team data if any is already selected
 */
export const FaceoffScreenTeam = ({
	colSpan,
	onClick,
	team,
}: {
	colSpan: GridItemProps['colSpan'],
	onClick?: () => void,
	team: ApiTeamsResponseTeamItem | null,
}) => (
	<GridItem
		onClick={onClick}
		colSpan={colSpan}
		justifySelf={'center'}
	>
		<Button
			size="md"
			height="48px"
			width="200px"
			p={'0'}
			backgroundColor={'transparent'}
			border="2px"
			borderStyle={'dashed'}
			borderWidth={'thin'}
			borderRadius={'lg'}
		>
			{team
				? (
					<TeamLogo
						url={team.team.logos[0]?.href}
						width={TEAMS_LIST_ROW_HEIGHT * 3}
					/>
				)
				: (
					<>
						Select Team
					</>
				)
			}
		</Button>
	</GridItem>
);
