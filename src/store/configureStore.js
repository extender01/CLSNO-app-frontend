import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import testReducer from '../reducers/testReducer';
import userReducer from '../reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        labTests: testReducer,
        users: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};