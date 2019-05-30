import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Root from './Root';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
				{

				}
			)
		: compose;

    const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
    const store = createStore(rootReducer, enhancer);
    
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));