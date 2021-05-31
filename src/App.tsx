import React from 'react';
import { storePersistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
	ChakraProvider,
	theme,
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

function App() {
	const location = useLocation<LocationState>();

	// if history consists of modal state
	const modalBackLocation = location.state?.modalBackLocation;

	return (
		<PersistGate
			loading={null}
			persistor={storePersistor}
		>
			<ChakraProvider theme={theme}>
				<ThemeSwitcher justifySelf="flex-end"/>
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
				)}
			</ChakraProvider>
		</PersistGate>
	);
}

export default App;
