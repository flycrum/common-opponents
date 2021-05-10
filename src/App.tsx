import React from 'react';
import './App.css';
import {
	useAppDispatch,
	useAppSelector,
} from './store/store';
import { sagaActions } from './store/saga';

function App() {
	const dispatch = useAppDispatch();
	const { events } = useAppSelector(state => state.schedule);

	return (
		<div className="App">
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
		</div>
	);
}

export default App;
