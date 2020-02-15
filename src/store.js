import { createStore, applyMiddleware, compose } from 'redux';
import { createReducer } from './redux/reducers/index';
import thunk from 'redux-thunk';
import registerLogin from './redux/middleware/registerLoginService'

const composeEnhancers = (typeof window === 'object' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose));

const initialState = {
    form: {
        dailyExpense: {
            values: {
                user: {
                    login: {
                        userId: 'Vimal1'
                    }
                }
            }

        }
    },
    data: {
        isLoggedIn: true
    }
}

export function configureStore() {
    const middlewares = [];
    const store = createStore(
        createReducer(),
        initialState,
        // composeEnhancers(applyMiddleware(...middlewares))
        composeEnhancers(applyMiddleware(thunk, registerLogin))
    );
    return store;
}

export default configureStore;