import { ListRowProps } from 'react-virtualized/dist/es/List';
import React from 'react';
import type { simSlice } from '../../store/slices/simSlice';
import type { apiTeamsSlice } from '../../store/slices/apiTeamsSlice';
import { Slice } from '@reduxjs/toolkit';
import theme from '../../theme';
import {
	Box,
	HStack,
	Image,
	Text,
} from '@chakra-ui/react';
import type { ColorMode } from '@chakra-ui/color-mode/dist/types/color-mode.utils';

/**
 * Generic type that allows us to extract out/infer the underlying redux slice state and its params.
 */
type SliceStateParam<C extends Slice> = C extends Slice<infer T> ? T : unknown;

export function resultsScreenRowRenderer(
	{ key, index, style }: ListRowProps,
	results: SliceStateParam<typeof simSlice>['results'],
	teamEntities: SliceStateParam<typeof apiTeamsSlice>['results']['entities'],
	colorMode: ColorMode,
) {
	const resultItem = results?.[index];
	const winnerColor = theme.colors.red['500'];
	const loserColor = theme.colors.blue['500'];
	const borderWinner1 = `linear-gradient(to left, ${winnerColor} 50%, ${loserColor} 50%)`;
	const borderWinner2 = `linear-gradient(to left, ${loserColor} 50%, ${winnerColor} 50%)`;
	// get inverse background color
	// const imgBg = getColor(theme, theme.components.Tooltip.baseStyle({})['--tooltip-bg'].slice('colors.'.length));

	if (!resultItem) {
		return null;
	}

	function getLogoUrl(teamId: string) {
		return teamEntities[teamId]?.team.logos[0]?.href;
	}

	return (
		<div key={key} style={style}>
			<HStack
				key={resultItem.pathway}
				justifyContent={'center'}
			>
				{resultItem.pathwayList.map((teamId, index) => (
					<HStack key={teamId}>
						<Box
							zIndex={'1'} // appear about border lines
							width={50}
							height={50}
							backgroundColor={theme.colors.white}
							borderRadius={'50%'}
							border={'1px'}
							borderColor={'gray.400'}
						>
							<Image
								width={'full'}
								height={'full'}
								borderRadius={'50%'}
								src={getLogoUrl(teamId)}
							/>
						</Box>
						<div>
							{/*stack matchups (usually 1 between opponents but sometimes more)*/}
							{index < resultItem.opponentsGames.length && resultItem.opponentsGames[index].map((game) => (
								<Text
									key={game.date}
									as={'div'}
									minWidth={'96px'}
									mx={'-24px'}
									borderBottomWidth={'4px'}
									fontSize={'xs'}
									textAlign={'center'}
									transform={'translateY(-6px)'}
									style={{
										borderImageSource: game.teamWinnerName === teamId
											? borderWinner1
											: borderWinner2,
										borderImageSlice: 1,
									}}

								>
									{game.teamWinnerName === teamId ? game.teamWinnerPoints : game.teamLoserPoints}
									{ ' -  '}
									{game.teamLoserName === teamId ? game.teamWinnerPoints : game.teamLoserPoints}
								</Text>
							))}
						</div>
					</HStack>
				))}
			</HStack>
		</div>
	);
}
