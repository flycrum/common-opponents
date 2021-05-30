import React, { useEffect } from 'react';
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { sagaActions } from '../../store/saga/saga';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BREADCRUMB_DELIMITER } from '../../consts/BREADCRUMB_DELIMITER';

/**
 * The results screen...obviously 😂
 */
export const ResultsScreen = () => {
	const dispatch = useAppDispatch()
	const { results } = useAppSelector((state) => state.sim);
	const { entities } = useAppSelector((state) => state.apiTeams.results);

	useEffect(() => {
		dispatch({ type: sagaActions.FIND_COMMON_OPPONENTS });
	}, [dispatch]);

	function getLogoUrl (teamId: string) {
		return entities[teamId]?.team.logos[0]?.href;
	}

	return (
		<VStack>
			<Heading>
				Results
			</Heading>
			{!results
				? (
					<Text>
						No results
					</Text>
				)
				: results.map((resultItem) => {
					return (
						<HStack key={resultItem}>
							{resultItem.split(BREADCRUMB_DELIMITER).map((teamId) => (
								<Image
									key={teamId}
									width={50}
									height={50}
									src={getLogoUrl(teamId)}
								/>
							))}
						</HStack>
					)
				})
			}
		</VStack>
	);
}
