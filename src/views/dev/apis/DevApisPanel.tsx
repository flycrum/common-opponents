import React, { ChangeEvent } from 'react';
import {
	Button,
	Checkbox,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import store, { useAppDispatch, useAppSelector } from '../../../store/store';
import { PositiveBadge } from '../../components/PositiveBadge';
import { NeutralBadge } from '../../components/NeutralBadge';
import {
	getOptionsUseMockApiGames,
	getOptionsUseMockApiTeams,
	getPersistKeyByStateName
} from '../../../store/storeHelpers';
import { setOptionsUseMockApiGames, setOptionsUseMockApiTeams } from '../../../store/slices/optionsSlice';
import { FaRegTrashAlt } from 'react-icons/fa';
import { VscDebugRestart } from 'react-icons/vsc';
import type { LoadingStage } from '../../../store/slices/initialLoadSlice';

interface RowData {
	name: LoadingStage;
	provider: string;
	storeName: LoadingStage;
	getOptionsUseMock: () => any;
	dispatchSetOptionsUseMock: (e: ChangeEvent<HTMLInputElement>) => any;
	hasCache: () => boolean;
}

/**
 * The APIs panel within dev tools.
 */
export const DevApisPanel = () => {
	const dispatch = useAppDispatch();
	const [hasCache, updateHasCache] = React.useState({
		apiGames: hasCacheInLocalStorage('apiGames'),
		apiTeams: hasCacheInLocalStorage('apiTeams'),
	});
	const { loadedSources } = useAppSelector((state) => state.initialData);
	const rowData: RowData[] = [
		{
			name:  'apiTeams',
			provider: 'espn.com',
			storeName: 'apiTeams',
			getOptionsUseMock: () => getOptionsUseMockApiTeams(store.getState()),
			dispatchSetOptionsUseMock: (e: ChangeEvent<HTMLInputElement>) => dispatch(setOptionsUseMockApiTeams(e.target.checked)),
			hasCache: () => hasCache.apiTeams,
		},
		{
			name:  'apiGames',
			provider: 'sports-reference.com',
			storeName: 'apiGames',
			getOptionsUseMock: () => getOptionsUseMockApiGames(store.getState()),
			dispatchSetOptionsUseMock: (e: ChangeEvent<HTMLInputElement>) => dispatch(setOptionsUseMockApiGames(e.target.checked)),
			hasCache: () => hasCache.apiGames,
		},
	];

	function clearCache (stateName: LoadingStage) {
		window.localStorage.removeItem(getPersistKeyByStateName(stateName));
		updateHasCache({
			apiGames: hasCacheInLocalStorage('apiGames'),
			apiTeams: hasCacheInLocalStorage('apiTeams'),
		});
	}

	function hasCacheInLocalStorage (stateName: LoadingStage) {
		return window.localStorage.hasOwnProperty(getPersistKeyByStateName(stateName));
	}

	return (
		<Table
			size={'sm'}
			variant="striped"
		>
			<Thead>
				<Tr>
					<Th>
						Name
					</Th>
					<Th>
						Provider
					</Th>
					<Th>
						Results
					</Th>
					<Th>
						Source
					</Th>
					<Th>
						useMock
					</Th>
					<Th>
						Cached
					</Th>
					<Th>
						Actions
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				{rowData.map((row, index) => (
					<Tr key={index}>
						<Td>
							{ row.name }
						</Td>
						<Td>
							{ row.provider }
						</Td>
						<Td>
							<PositiveBadge>
								{ loadedSources[row.storeName].length }
							</PositiveBadge>
						</Td>
						<Td>
							<NeutralBadge>
								{ loadedSources[row.storeName].source }
							</NeutralBadge>
						</Td>
						<Td>
							<Checkbox
								defaultIsChecked={!!row.getOptionsUseMock()}
								onChange={row.dispatchSetOptionsUseMock}
							/>
						</Td>
						<Td>
							<Checkbox
								isChecked={hasCache[row.storeName]}
								isDisabled
							/>
						</Td>
						<Td>
							<Button
								size={'xs'}
								variant="outline"
								leftIcon={hasCache[row.storeName] ? <FaRegTrashAlt /> : <VscDebugRestart />}
								colorScheme="red"
								onClick={() => hasCache[row.storeName]
									? clearCache(row.storeName)
									: window.location.reload()
								}
							>
								{hasCache[row.storeName]
									? 'Clear'
									: 'Restart'
								}
							</Button>
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
}

export const DevModalTabPanelApisTab = () => (
	<>
		APIs
	</>
);
