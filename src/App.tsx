import React from 'react';
import './App.css';
import {
	storePersistor,
	useAppDispatch,
	useAppSelector,
} from './store/store';
import { sagaActions } from './store/saga';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	const dispatch = useAppDispatch();
	const { events } = useAppSelector(state => state.schedule);

	return (
		<div className="App">
			<PersistGate loading={null} persistor={storePersistor}>
				App
				<button onClick={() => dispatch({ type: sagaActions.FETCH_SCHEDULE_SAGA })}>
					Getdata (MQL)
				</button>
				{events.map(event => {
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
