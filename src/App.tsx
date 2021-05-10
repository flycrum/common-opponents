import React from 'react';
import './App.css';
import {
	storePersistor,
	useAppSelector,
} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	const { schoolGamesByOppId } = useAppSelector(state => state.schedule);

	return (
		<div className="App">
			<PersistGate loading={null} persistor={storePersistor}>
				App
				{Object.entries(schoolGamesByOppId).map(([teamId, oppsLookup], index, three) => {
					return Object.entries(oppsLookup).map(([oppTeamId, events]) => {
						return events.map((game) => {
							if (teamId === 'Alabama') {
								console.log('teamId: ', teamId, game.teamWinnerName);
							}
							return (
								<p key={`${game.date}_${game.teamWinnerName}_${game.teamLoserName}`}>
									{ teamId }
									{ ' ' }
									vs.
									{ ' ' }
									{ oppTeamId }
									{ ' ' }
									=
									{ ' ' }
									{ game.teamWinnerName === teamId ? game.teamWinnerPoints : game.teamLoserPoints }
									{ ' ' }
									-
									{ ' ' }
									{ game.teamLoserName === oppTeamId ? game.teamLoserPoints : game.teamWinnerPoints }
								</p>
							)
						})
					})
				})}
			</PersistGate>
		</div>
	);
}

export default App;
