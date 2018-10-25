import update from 'react-addons-update';
import {} from './../actions/requests.js';


const initialState = {
    requestList: [],
    requests: {},
    isLoading: false,
};

export default function posts(store = initialState, action){
    switch(action.type){

        case 'START_REQUEST_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_REQUEST_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                requestList: { $set: action.payload.result },
                requests: { $merge: action.payload.entities.requests }
            });
        }

        case 'ERROR_REQUEST_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }

        case 'START_REQUEST_SENDING':{
            return store;
            
        }

        case 'SUCCESS_REQUEST_SENDING':{
            return update(store, {
                isLoading: { $set: false },
                // requestList: { $set: action.payload.result },
                requests: { $merge: action.payload }
            });
        }

        case 'ERROR_REQUEST_SENDING':{
            return true;
        }
        
        case 'START_REQUEST_DELETING':{
            return store;
            
        }

        case 'SUCCESS_REQUEST_DELETING':{
            return store;
        }

        case 'ERROR_REQUEST_DELETING':{
            return store;
        }
        default:
            return store;
    }
}