import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activeBooks from './books_reducer';
import expenseReducer from './expense-reducer';
import expenseDate from './expense-date-reducer';
import registerLoginReducer from './register_reducer';

export function createReducer(state = {}, action) {
    return combineReducers({
        form: formReducer,
        data: (state, action) => {
            return ({
            ...state,
            ...activeBooks,
            ...expenseDate(state, action),
            ...expenseReducer(state, action),
            ...registerLoginReducer(state, action)
        })}
    });
}