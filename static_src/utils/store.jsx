import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initReducers from './../reducers';
import logger from 'redux-logger';

function initStore(initialState){
    return createStore(
        initReducers,
        initialState,
        composeWithDevTools(applyMiddleware(apiMiddleware, thunk, logger)),
    );
}
export default initStore;
