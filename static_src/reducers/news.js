import update from 'react-addons-update';
import {} from './../actions/news.js';


const initialState = {
    newsList: [],
    news: {},
    isLoading: false,
};

export default function posts(store = initialState, action){
    switch(action.type){

        case 'START_NEWS_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_NEWS_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                newsList: { $set: action.payload.result },
                news: { $merge: action.payload.entities.news }
            });
        }

        case 'ERROR_NEWS_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }

        case 'START_NEWS_SENDING':{
            return store;
        }

        case 'SUCCESS_NEWS_SENDING':{
            return store;
        }

        case 'ERROR_NEWS_SENDING':{
            return true;
        }
        
        case 'START_NEWS_DELETING':{
            return store;
            
        }

        case 'SUCCESS_NEWS_DELETING':{
            return store;
        }

        case 'ERROR_NEWS_DELETING':{
            return store;
        }
        default:
            return store;
    }
}