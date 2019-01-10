import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';

import  reducer from './reducer';

const state = {
};

export default createStore(
    reducer,
    state,
    applyMiddleware(promise, logger)
);
