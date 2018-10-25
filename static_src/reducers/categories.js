import update from 'react-addons-update';
import {} from './../actions/categories';


const initialState = {
    categoryList: [],
    categories: {},
    isLoading: false,
};

export default function categories(store = initialState, action){
    switch(action.type){

        case 'START_CATEGORY_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_CATEGORY_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                categoryList: { $set: action.payload.result },
                categories: { $merge: action.payload.entities.categories }
            });
        }

        case 'ERROR_CATEGORY_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }
       
        default:
            return store;
    }
}