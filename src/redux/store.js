import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const MiddleWares = [];

if(process.env.NODE_ENV === 'development'){
    const { logger } = require('redux-logger');

    MiddleWares.push(logger);
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...MiddleWares)));

export default store;
