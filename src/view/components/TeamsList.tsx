import React from 'react';
import { Box, Button, Image, Text } from 'grommet';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiTeamsSelectors } from '../../store/apiTeamsSlice';
import styled from 'styled-components';
import { simActions } from '../../store/simSlice';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';

interface Props {
	teamOption: 1 | 2;
}

/**
 * A select component for the list of all teams.
 */
export const TeamsList = ({ teamOption }: Props) => {
	const teams = useAppSelector(apiTeamsSelectors.selectAll);
	const { team1, team2 } = useAppSelector((state) => state.sim);
	const dispatch = useAppDispatch();
	const borderImageSource = teamOption === 1
		? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))'
		: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))';
	const setTeam = (team: ApiTeamsResponseTeamItem) => {
		dispatch(teamOption === 1
			? simActions.setSimTeam1(team)
			: simActions.setSimTeam2(team)
		);
	};

	return (
		<Box
			as="ul"
			pad={{ horizontal: "large" }}
			width={{ min: '50%' }}
			overflow="auto"
			// position scrollbars based on side
			style={{ direction: teamOption === 1 ? 'rtl' : 'ltr' }}
		>
			{teams.map((team, index) => (
				<Box
					as="li"
					key={team.team.id}
					direction="row"
					align="center"
					justify={teamOption === 1 ? 'end' : 'start'}
					// justify="between"
					// pad="small"
					height={{ min: 'auto' }}
					border={index ? "bottom" : "horizontal"}
					style={{
						borderImageSource,
						borderImageSlice: 1,
						// standardize scrollbars
						direction: 'ltr',
					}}
				>
					<ButtonStyled
						data-selected={teamOption === 1 ? team === team1 : team === team2}
						onClick={() => setTeam(team)}
						teamOption={teamOption}
					>
						{teamOption === 2 && (
							<TeamLogo url={team.team.logos[0]?.href} />
						)}
						<Text>
							{ team.team.displayName }
						</Text>
						{teamOption === 1 && (
							<TeamLogo url={team.team.logos[0]?.href} />
						)}
					</ButtonStyled>
				</Box>
			))}
		</Box>
	);
}

const TeamLogo = ({ url }: { url: string }) => (
	<Box
		width="small"
		// width="xsmall"
		height="xxsmall"
		// height="32px"
	>
		<Image
			src={url}
			fit="cover"
		/>
	</Box>
);

const ButtonStyled = styled(Button).attrs((props: any) => ({
	teamOption: props.teamOption,
}))`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: ${(props: any) => props.teamOption === 1 ? 'flex-end' : 'flex-start'};
	filter: grayscale(100%);
	//transform: scale(1.0);
	transition: transform 0.5s ease, filter 1.5s ease;

	&[data-selected="true"],
	&:hover {
		filter: grayscale(0%);
		//transform: scale(1.2);s
	}

	& > div {
		transition: height 0.3s ease-in-out;
	}

	&[data-selected="true"] > div {
		height: 180px;
		//height: 100px;
	}
`;


