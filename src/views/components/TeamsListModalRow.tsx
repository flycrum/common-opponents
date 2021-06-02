import React, { useRef } from 'react';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import { Button, HStack, Text } from '@chakra-ui/react';
import { TeamLogo } from './TeamLogo';
import { useResponsiveLogoHeightX } from '../../helpers/useResponsiveLogoHeightX';
import { useEffectOnce } from 'react-use';

interface Props {
	disableTeam?: boolean;
	isAlreadySelected: boolean;
	onClick?: () => void;
	rowHeight: number;
	suffix?: React.ReactNode;
	team: ApiTeamsResponseTeamItem | null;
}

/**
 * The rendered teams list row item wrapped in a button.
 * @param disableTeam whether to disable the team from being selected
 * @param onClick callback for when this row is clicked
 * @param rowHeight the targeted height for the row
 * @param selectedTeam the previously selected team, if any
 * @param suffix content to show after the team name
 * @param team the team data for the row
 */
export const TeamsListModalRow = ({
	disableTeam,
	isAlreadySelected,
	onClick,
	rowHeight,
	suffix,
	team,
}: Props) => {
	const rowHeightMultiplier = useResponsiveLogoHeightX();
	const focusRef = useRef<HTMLButtonElement>(null);

	useEffectOnce(() => {
		if (isAlreadySelected) {
			focusRef.current?.focus();
		}
	});

	return (
		<Button
			ref={focusRef}
			disabled={disableTeam}
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
						{ team.team.nickname }
						{suffix && (
							<>
								{ ' ' }
								{suffix}
							</>
						)}
					</Text>
				</HStack>
			)}
		</Button>
	)
};
