import{ combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import requests from './requests';
import news from './news';
import session from './session';
import categories from './categories';
import auth from './auth';


export default combineReducers({
    routing:routerReducer,
    requests,
    news,
    categories,
    sessionInfo: session,
    auth: auth,
});