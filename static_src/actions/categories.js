import { getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { category } from './../utils/schemas.jsx';

export const START_CATEGORY_LOADING = 'START_CATEGORY_LOADING';
export const SUCCESS_CATEGORY_LOADING = 'SUCCESS_CATEGORY_LOADING';
export const ERROR_CATEGORY_LOADING = 'ERROR_CATEGORY_LOADING';


export const loadCategories = (url) => {
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_CATEGORY_LOADING, 
                {
                    type: SUCCESS_CATEGORY_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [category]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_CATEGORY_LOADING],
        },
    };
};

