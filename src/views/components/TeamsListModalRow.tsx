import React from 'react';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import { Button, HStack, Text } from '@chakra-ui/react';
import { TeamLogo } from './TeamLogo';
import { useResponsiveLogoHeightX } from '../../helpers/useResponsiveLogoHeightX';

interface Props {
	onClick?: () => void,
	rowHeight: number,
	team: ApiTeamsResponseTeamItem | null,
}

/**
 * The rendered teams list row item wrapped in a button.
 * @param onClick callback for when this row is clicked
 * @param rowHeight the targeted height for the row
 * @param team the team data for the row
 */
export const TeamsListModalRow = ({
	onClick,
	rowHeight,
	team,
}: Props) => {
	const rowHeightMultiplier = useResponsiveLogoHeightX();

	return (
		<Button
			onClick={onClick}
			height={rowHeight}
			overflow={'hidden'}
			width={'full'}
			backgroundColor={'transparent'}
			borderRadius={'none'}
		>
			{team && (
				<HStack
					height={'full'}
					width={'full'}
					justifyContent={'flex-start'}
				>
					<TeamLogo
						url={team.team.logos[0]?.href}
						width={rowHeight * rowHeightMultiplier}
					/>
					<Text as={'p'}>
						{ team.team.displayName }
					</Text>
				</HStack>
			)}
		</Button>
	)
};
