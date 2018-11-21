import update from 'react-addons-update';
import {} from './../actions/news.js';


const initialState = {
    newsList: [],
    news: {},
    isLoading: false,
};

export default function news(store = initialState, action){
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.news) {
        newStore = update(store, {
            news: { $merge: action.payload.entities.news },
        });
    }
    switch(action.type){

        case 'START_NEWS_LOADING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_NEWS_LOADING':{
            return update(newStore, {
                isLoading: { $set: false },
                newsList: { $set: action.payload.result },
            });
        }

        case 'ERROR_NEWS_LOADING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'START_NEWS_SENDING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_NEWS_SENDING':{
            console.log(action.payload);
            return update(newStore, {
                isLoading: { $set: false },
                newsList: { $unshift: action.payload.result },

            });
        }

        case 'ERROR_NEWS_SENDING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        
        case 'START_NEWS_DELETING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_NEWS_DELETING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'ERROR_NEWS_DELETING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        default:
            return newStore;
    }
}