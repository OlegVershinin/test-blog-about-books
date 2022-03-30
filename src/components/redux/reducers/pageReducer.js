import { PAGE_NUMBER, PAGE_NUMBER_BOOKS } from "/components/redux/types";

const initialState = {
    page: 1,
    selectedPost: [],
    pageBooks: 1,
    selectedPostBooks: [],
    oldTheme: [],
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_NUMBER:
            return {
                ...state,
                page: action.payload,
                selectedPost: action.payload1,
            };

        case PAGE_NUMBER_BOOKS:
            return {
                ...state,
                pageBooks: action.payload,
                selectedPostBooks: action.payload1,
                oldTheme: action.payload2,
            };

        default:
            return state;
    }
};
