import { ListRowProps } from 'react-virtualized/dist/es/List';
import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import type { simSlice } from '../../store/slices/simSlice';
import type { apiTeamsSlice } from '../../store/slices/apiTeamsSlice';
import { Slice } from '@reduxjs/toolkit';

/**
 * Generic type that allows us to extract out/infer the underlying redux slice state and its params.
 */
type SliceStateParam<C extends Slice> = C extends Slice<infer T> ? T : unknown;

export function resultsScreenRowRenderer(
	{ key, index, style }: ListRowProps,
	results: SliceStateParam<typeof simSlice>['results'],
	teamEntities: SliceStateParam<typeof apiTeamsSlice>['results']['entities'],
) {
	const resultItem = results?.[index];

	if (!resultItem) {
		return null;
	}

	function getLogoUrl(teamId: string) {
		return teamEntities[teamId]?.team.logos[0]?.href;
	}

	return (
		<div key={key} style={style}>
			<HStack key={resultItem.pathway}>
				{resultItem.pathwayList.map((teamId) => (
					<Image
						key={teamId}
						width={50}
						height={50}
						src={getLogoUrl(teamId)}
					/>
				))}
			</HStack>
		</div>
	);
}
