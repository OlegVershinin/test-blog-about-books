import {
    CREATE_THEME,
    CREATE_THEME_BOOKS,
    CREATE_BOOKS_DETAILS,
} from "/components/redux/types";

const initialState = {
    themes: [],
    books: [],
    book: [],
    theme: [],
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_THEME:
            return { ...state, themes: action.payload };
        case CREATE_THEME_BOOKS:
            return { ...state, books: action.payload, theme: action.payload1 };
        case CREATE_BOOKS_DETAILS:
            return { ...state, book: action.payload };

        default:
            return state;
    }
};
