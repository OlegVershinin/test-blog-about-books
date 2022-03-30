import {
    POST_THEME,
    POST_THEME_BOOK,
    POST_BOOK,
} from '/components/redux/types';

const initialState = {
    post_theme: [],
    post_theme_book: [],
    post_book: [],
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_THEME:
            return {
                ...state,
                post_theme: action.payload,
            };
        case POST_THEME_BOOK:
            return {
                ...state,
                post_theme_book: action.payload,
            };
        case POST_BOOK:
            return {
                ...state,
                post_book: action.payload,
            };

        default:
            return state;
    }
};
