import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/index';
import submit from './redux/action/submit';
import configureStore from './store';

const store = configureStore();

export const initialState = {};
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();