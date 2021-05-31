import React from 'react';
import {
	Box,
	Button,
	Heading,
	HStack,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { LoadingStage } from '../../store/slices/initialLoadSlice';
import { SuccessBadge } from '../components/SuccessBadge';
import { NeutralBadge } from '../components/NeutralBadge';

/**
 * The APIs dev tools.
 */
export const DevModalTabApis = () => {
	const { loadedSources } = useAppSelector((state) => state.initialData);

	return (
		<Table variant="striped">
			{/*<TableCaption>*/}
			{/*	Imperial to metric conversion factors*/}
			{/*</TableCaption>*/}
			<Thead>
				<Tr>
					<Th>
						Name
					</Th>
					<Th>
						Provider
					</Th>
					<Th>
						Source
					</Th>
					<Th>
						Length
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>
						apiTeams
					</Td>
					<Td>
						espn.com
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiTeams'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<SuccessBadge>
							{ loadedSources['apiTeams'].length }
						</SuccessBadge>
					</Td>
				</Tr>
				<Tr>
					<Td>
						apiGames
					</Td>
					<Td>
						sports-reference.com
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiGames'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<SuccessBadge>
							{ loadedSources['apiGames'].length }
						</SuccessBadge>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}

DevModalTabApis.Tab = () => (
	<>
		APIs
	</>
);

export const DevModalTabCard: React.FC<{
	onClick: () => void,
	stage: LoadingStage
}> = ({ onClick, stage }) => {
	const { loadedSources } = useAppSelector((state) => state.initialData);

	return (
		<Box
			overflow="hidden"
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
		>
			<Button
				variant="ghost"
				justifyContent={'flex-start'}
				height="auto"
				width="100%"
				onClick={onClick}
			>
				<Box p="6">
					<Box d="flex">
						<Heading
							as="u"
							size={'sm'}
							mb={3}
						>
							APIs
							{ ' / ' }
							{ stage }
						</Heading>
					</Box>
					<HStack alignItems={'center'}>
						<SuccessBadge>
							{ loadedSources[stage].length }
						</SuccessBadge>
						<Box as="span" color="gray.500" fontSize="sm">
							results via
						</Box>
						<NeutralBadge>
							{ loadedSources[stage].source }
						</NeutralBadge>
					</HStack>
				</Box>
			</Button>
		</Box>
	)
}

export const DevModalTabApisGamesCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	return (
		<DevModalTabCard
			onClick={onClick}
			stage={'apiGames'}
		/>
	)
}

export const DevModalTabApisTeamsCard: React.FC<{onClick: () => void}> = ({ onClick }) => {
	return (
		<DevModalTabCard
			onClick={onClick}
			stage={'apiTeams'}
		/>
	)
}
