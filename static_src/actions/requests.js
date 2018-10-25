import { getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { request } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_REQUEST_LOADING = 'START_REQUEST_LOADING';
export const SUCCESS_REQUEST_LOADING = 'SUCCESS_REQUEST_LOADING';
export const ERROR_REQUEST_LOADING = 'ERROR_REQUEST_LOADING';
export const START_REQUEST_SENDING = 'START_REQUEST_SENDING';
export const SUCCESS_REQUEST_SENDING = 'SUCCESS_REQUEST_SENDING';
export const ERROR_REQUEST_SENDING = 'ERROR_REQUEST_SENDING';
export const START_REQUEST_DELETING = 'START_REQUEST_DELETING';
export const SUCCESS_REQUEST_DELETING = 'SUCCESS_REQUEST_DELETING';
export const ERROR_REQUEST_DELETING = 'ERROR_REQUEST_DELETING';

export const loadRequests = (url) => {
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_REQUEST_LOADING, 
                {
                    type: SUCCESS_REQUEST_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [request]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_REQUEST_LOADING],
        },
    };
};


export const deleteRequest = (url,data) => {
    console.log('Delete')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken")
              },
            types: [START_REQUEST_DELETING, 
                    SUCCESS_REQUEST_DELETING,
                    ERROR_REQUEST_DELETING],
        },
    };
};

export const createRequest = (url,data) => {
    console.log('SEND')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken")
              },
            types: [START_REQUEST_SENDING, 
                    SUCCESS_REQUEST_SENDING,
                    ERROR_REQUEST_SENDING],
        },
    };
};