import update from 'react-addons-update';
import {} from './../actions/requests.js';


const initialState = {
    requestList: [],
    requests: {},
    isLoading: false,
    Data: [],
};

export default function requests(store = initialState, action){

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
                requestList: { $merge: action.payload.result },

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
            console.log(action.payload);
            return update(newStore, {
                isLoading: { $set: false },

            });
        }

        case 'ERROR_REQUEST_DELETING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'START_REQUEST_UPDATING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_REQUEST_UPDATING':{
            console.log(action.payload);
            return update(newStore, {
                isLoading: { $set: false },

            });
        }

        case 'ERROR_REQUEST_UPDATING':{
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
            });
        }

        case 'ERROR_REQUEST_FILTERING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case 'START_DATA_PREPARING':{
            return update(newStore, {
                isLoading: { $set: true },
            });
            
        }

        case 'SUCCESS_DATA_PREPARING':{
            console.log('payload');
            console.log(action.payload);
            return update(newStore, {
                isLoading: { $set: false },
                Data: { $set: action.payload },
            });
        }

        case 'ERROR_DATA_PREPARING':{
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        default:
            return newStore;
    }
}