import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activeBooks from './books_reducer';

export default function createReducer(reducerObjects = {}) {
    return combineReducers({
        form: formReducer,
        ...reducerObjects,
        ...activeBooks
    });
}
