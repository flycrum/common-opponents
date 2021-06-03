import React from 'react';
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

/**
 * The APIs panel within dev tools.
 * @todo this file needs to be refactored, cleaned up, split out, etc.
 */
export const DevApisPanel = () => {
	const [hasCache, updateHasCache] = React.useState({
		apiGames: hasCacheInLocalStorage('apiGames'),
		apiTeams: hasCacheInLocalStorage('apiTeams'),
	});
	const { loadedSources } = useAppSelector((state) => state.initialData);
	const dispatch = useAppDispatch();

	function clearCache (stateName: string) {
		window.localStorage.removeItem(getPersistKeyByStateName(stateName));
		updateHasCache({
			apiGames: hasCacheInLocalStorage('apiGames'),
			apiTeams: hasCacheInLocalStorage('apiTeams'),
		});
	}

	function hasCacheInLocalStorage (stateName: string) {
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
						<PositiveBadge>
							{ loadedSources['apiTeams'].length }
						</PositiveBadge>
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiTeams'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<Checkbox
							defaultIsChecked={!!getOptionsUseMockApiTeams(store.getState())}
							onChange={(e) => dispatch(setOptionsUseMockApiTeams(e.target.checked))}
						/>
					</Td>
					<Td>
						<Checkbox
							isChecked={hasCache.apiTeams}
							isDisabled
						/>
					</Td>
					<Td>
						<Button
							size={'xs'}
							variant="outline"
							leftIcon={hasCache.apiTeams ? <FaRegTrashAlt /> : <VscDebugRestart />}
							colorScheme="red"
							onClick={() => hasCache.apiTeams
								? clearCache('apiTeams')
								: window.location.reload()
							}
						>
							{hasCache.apiTeams
								? 'Clear'
								: 'Restart'
							}
						</Button>
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
						<PositiveBadge>
							{ loadedSources['apiGames'].length }
						</PositiveBadge>
					</Td>
					<Td>
						<NeutralBadge>
							{ loadedSources['apiGames'].source }
						</NeutralBadge>
					</Td>
					<Td>
						<Checkbox
							defaultIsChecked={!!getOptionsUseMockApiGames(store.getState())}
							onChange={(e) => dispatch(setOptionsUseMockApiGames(e.target.checked))}
						/>
					</Td>
					<Td>
						<Checkbox
							isChecked={hasCache.apiGames}
							isDisabled
						/>
					</Td>
					<Td>
						<Button
							size={'xs'}
							variant="outline"
							leftIcon={hasCache.apiGames ? <FaRegTrashAlt /> : <VscDebugRestart />}
							colorScheme="red"
							// todo - move to saga?
							onClick={() => hasCache.apiGames
								? clearCache('apiGames')
								: window.location.reload()
							}
						>
							{hasCache.apiGames
								? 'Clear'
								: 'Restart'
							}
						</Button>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}

export const DevModalTabPanelApisTab = () => (
	<>
		APIs
	</>
);
