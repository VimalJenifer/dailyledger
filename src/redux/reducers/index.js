import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activeBooks from './books_reducer';
import expenseReducer from './expense-reducer';
import expenseDate from './expense-date-reducer';

export default function createReducer(state = {}, action) {
    return combineReducers({
        form: formReducer,
        data: (state, action) => combineReducers({
            ...state,
            ...activeBooks,
            ...expenseDate(state, action),
            ...expenseReducer(state, action)
        })        
    });
}
