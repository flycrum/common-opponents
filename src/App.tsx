import React from 'react';
import { storePersistor, useAppSelector } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
	ButtonGroup,
	ChakraProvider,
	Spinner,
	Text,
	theme,
	VStack,
} from '@chakra-ui/react';
import 'react-virtualized/styles.css';
import { FaceoffScreen } from './views/faceoff/FaceoffScreen';
import { ThemeSwitcher } from './views/components/ThemeSwitcher';
import {
	Switch,
	Redirect,
	Route,
	useLocation,
} from 'react-router-dom';
import type  { LocationState } from './types/LocationState';
import { TeamsListModal } from './views/components/TeamsListModal';
import { routePaths } from './consts/routePaths';
import { ResultsScreen } from './views/results/ResultsScreen';
import { DevButton } from './views/dev/components/DevButton';
import { DevModal } from './views/dev/DevModal';
import { useBoolean } from 'react-use';
import { isDevEnv } from './utils/isDevEnv';

function App() {
	const location = useLocation<LocationState>();
	const [ isShowingDevModal, showDevModal ] = useBoolean(false);
	const { isLoading, loadingStage } = useAppSelector((state) => state.initialData);

	// if history consists of modal state
	const modalBackLocation = location.state?.modalBackLocation;

	return (
		<ChakraProvider theme={theme}>
			<PersistGate
				loading={null}
				persistor={storePersistor}
			>
				{isLoading
					? (
						<VStack
							height={'full'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							<Spinner
								thickness="4px"
								speed="1.0s"
								emptyColor="gray.200"
								color="blue.500"
								size="xl"
							/>
							<Text>
								{loadingStage === 'apiTeams'
									? 'Loading all those teams you love...'
									: '...and all those games you missed'
								}
							</Text>
						</VStack>
					)
					: (
						<>
							<ButtonGroup
								position={'absolute'}
								right={2}
								top={2}
								variant="outline"
								spacing="6"
							>
								{isDevEnv() && (
									<DevButton onClick={showDevModal} />
								)}
								<ThemeSwitcher justifySelf="flex-end"/>
							</ButtonGroup>
							<Switch location={modalBackLocation || location}>
								<Route
									exact={true}
									path={routePaths.HOME_FACEOFF}
									component={FaceoffScreen}
								/>
								<Route
									exact
									path={routePaths.TEAM_SELECT_MODAL}
									render={() => (
										modalBackLocation
											? (
												<FaceoffScreen />
											)
											: (
												<Redirect
													to={{
														pathname: routePaths.HOME_FACEOFF,
														state: undefined,
													}}
												/>
											)
									)}
								/>
								<Route
									exact={true}
									path={routePaths.RESULTS}
									component={ResultsScreen}
								/>
								{/* Not Found */}
								<Route path="*">
									<Redirect
										to={{
											pathname: routePaths.HOME_FACEOFF,
											state: undefined,
										}}
									/>
								</Route>
							</Switch>
							{modalBackLocation && (
								<Route path={routePaths.TEAM_SELECT_MODAL} children={<TeamsListModal />} />
							)}
							{isShowingDevModal && (
								<DevModal onClose={() => showDevModal(false)} />
							)}
						</>
					)
				}
			</PersistGate>
		</ChakraProvider>
	);
}

export default App;
