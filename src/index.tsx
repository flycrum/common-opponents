import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Should be null because we haven't modified the history stack yet
// console.log(`History.state before pushState: ${window.location.href}`, JSON.stringify(window.history.state));

// clear out state as we don't want it to persist when app is refreshed or coming in cold
// note: modals use 'state' to more easily navigate routing without refreshes leading to weird in-between states
window.history.replaceState({}, document.title, window.location.href);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ColorModeScript />
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
