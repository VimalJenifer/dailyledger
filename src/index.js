import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/index'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import submit from './action/submit';
import { submit1 } from './action/submit';
import configureStore from './store';

const store = configureStore();

export const initialState = {};
ReactDOM.render(
	<Provider store={store}>
		<App onSubmit={values => submit(values)} />
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();