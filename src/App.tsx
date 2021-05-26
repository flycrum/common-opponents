import React from 'react';
import { storePersistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { TeamsList } from './view/components/TeamsList';
import {

function App() {
	return (
		<PersistGate
			loading={null}
			persistor={storePersistor}
		>
		</PersistGate>
	);
}

export default App;
