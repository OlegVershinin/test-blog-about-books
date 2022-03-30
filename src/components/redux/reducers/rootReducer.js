import { combineReducers } from 'redux';
import { bookReducer } from '/components/redux/reducers/bookReducer';
import { appReducer } from '/components/redux/reducers/appReducer';
import { pageReducer } from '/components/redux/reducers/pageReducer';
import { fidbackReducer } from '/components/redux/reducers/fidbackReducer';
import { postReducer } from '/components/redux/reducers/postReducer';

export const rootReducer = combineReducers({
    themes: bookReducer,
    pagination: pageReducer,
    app: appReducer,
    fidback: fidbackReducer,
    post: postReducer,
});
