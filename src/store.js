import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import apiReduser from "./modules/api/reduser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : compose;

const redusers = combineReducers({
    api: apiReduser,
});

const store = createStore(redusers, composeEnhancers());

export default store;
