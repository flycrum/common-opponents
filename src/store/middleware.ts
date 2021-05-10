import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [
	...getDefaultMiddleware({
		thunk: false,
	}),
	sagaMiddleware,
];

export default middleware;

export function runMiddleware () {
	sagaMiddleware.run(saga);
}
