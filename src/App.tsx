import React from 'react';
import { storePersistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Box, Heading, Text } from 'grommet';
import { TeamsList } from './view/components/TeamsList';
import {
	GrommetStyled,
	grommetTheme,
} from './view/components/GrommetAppThemeStyled';

function App() {
	return (
		<PersistGate
			loading={null}
			persistor={storePersistor}
		>
			<GrommetStyled theme={grommetTheme}>
				<Box
					fill
					overflow="hidden"
					pad="xsmall"
				>
					<Box
						align="center"
						style={{ minHeight: 'initial' }}
					>
						<Heading level="3">
							Common Opponents
						</Heading>
						<Text>
							Select teams to find their common opponents...within 2 degrees of separation.
						</Text>
					</Box>
					<Box direction="row-responsive">
						<TeamsList teamOption={1} />
						<TeamsList teamOption={2} />
					</Box>
				</Box>
			</GrommetStyled>
		</PersistGate>
	);
}

export default App;
