import React from 'react';
import './App.css';
import {
	storePersistor,
	useAppSelector,
} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	const { results } = useAppSelector(state => state.apiGames);

	return (
		<div className="App">
			<PersistGate loading={null} persistor={storePersistor}>
				App
				{Object.values(results).map(event => {
					return (
						<p key={`${event.date}_${event.teamWinnerName}_${event.teamLoserName}`}>
							{ event.teamWinnerName }
							{ ' ' }
							vs.
							{ ' ' }
							{event.teamLoserName}
						</p>
					)
				})}
			</PersistGate>
		</div>
	);
}

export default App;
