// required for babel polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { history } from './js/constants/helper';

import { Provider } from 'react-redux';

import configureStore from './js/store/configureStore';
import App from './App';
import './scss/styles.scss';
import 'react-toastify/dist/ReactToastify.css';

export const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
