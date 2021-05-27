import React from 'react';
import { storePersistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
	ChakraProvider,
	theme,
} from '@chakra-ui/react';
import 'react-virtualized/styles.css';
import { FaceoffScreen } from './views/faceoff/FaceoffScreen';
import { ThemeSwitcher } from './utils/ThemeSwitcher';

function App() {
	return (
		<PersistGate
			loading={null}
			persistor={storePersistor}
		>
			<ChakraProvider theme={theme}>
				<ThemeSwitcher justifySelf="flex-end"/>
				<FaceoffScreen />
			</ChakraProvider>
		</PersistGate>
	);
}

export default App;
