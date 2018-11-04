import update from 'react-addons-update';
import {} from './../actions/requests.js';


const initialState = {
    requestList: [],
    requests: {},
    isLoading: false,
};

export default function posts(store = initialState, action){

    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.requests) {
        newStore = update(store, {
            requests: { $merge: action.payload.entities.requests },
        });
    }

    switch(action.type){

        case 'START_REQUEST_LOADING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_REQUEST_LOADING':{
            return update(newStore, {
                isLoading: { $set: false },
                requestList: { $set: action.payload.result },
                
            });
        }

        case 'ERROR_REQUEST_LOADING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'START_REQUEST_SENDING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_REQUEST_SENDING':{
            console.log(action.payload);
            return update(newStore, {
                isLoading: { $set: false },
                requestList: { $push: action.payload.result },

            });
        }

        case 'ERROR_REQUEST_SENDING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        
        case 'START_REQUEST_DELETING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_REQUEST_DELETING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'ERROR_REQUEST_DELETING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'START_REQUEST_FILTERING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_REQUEST_FILTERING':{
            return update(newStore, {
                isLoading: { $set: false },
                requestList: { $set: action.payload.result },
                // requests: { $merge: action.payload.entities.requests }
            });
        }

        case 'ERROR_REQUEST_FILTERING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        default:
            return newStore;
    }
}