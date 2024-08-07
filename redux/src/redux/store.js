import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import {getDefaultMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import logger  from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import cakeReducer from './cake/cakeReducer';
import rootReducer from './rootReducer';

const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
    // enhancers: [composeWithDevTools()]

})
export default store