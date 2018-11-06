import update from 'react-addons-update';
import {} from './../actions/session.js';
import Cookies from 'js-cookie';

const initialState = {
    isLogined: false,
    data: {}
};

export default function session(store = initialState, action){
    switch(action.type){
        
        case 'LOG_IN':

            return update(store, {
                isLogined: { $set: true },
            });
                  
        case 'LOG_OUT':{
            console.log('logout');
            Cookies.set('sessionid', '',{
                expires: -1
            });
            return update(store, {
                isLogined: { $set: false },
                data: { $set: {} }
            });
        }
        
        case 'START_SESSION_LOADING':{
            return store;
        }
        case 'SUCCESS_SESSION_LOADING':{
            console.log('logined');
            return update(store, {
                isLogined: { $set: true },  
                data: { $set: action.payload }
            });
        }
        case 'ERROR_SESSION_LOADING':{
            console.log('need to login');
            return update(store, {
                isLogined: { $set: false },
            });
        }
        default:
            return store;
    }
}
