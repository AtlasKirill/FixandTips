import { CALL_API } from 'redux-api-middleware';


const actionsList = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
    SUCCESS_SESSION_LOADING: 'SUCCESS_SESSION_LOADING',
    ERROR_SESSION_LOADING: 'ERROR_SESSION_LOADING',
    START_SESSION_LOADING: 'START_SESSION_LOADING',


};
export const loadSessionUserInfo = (url) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [
                    actionsList.START_SESSION_LOADING, 
                    actionsList.SUCCESS_SESSION_LOADING, 
                    actionsList.ERROR_SESSION_LOADING,],
        },
    };
};

export function logIn() {
    return {
        type: actionsList.LOG_IN,
    };
}

export function logOut() {
    return {
        type: actionsList.LOG_OUT,
    };
}



export default actionsList;
