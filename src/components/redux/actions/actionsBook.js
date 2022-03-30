import axios from 'axios';
import { BASE_URL } from '/util/constans';
import {
    CREATE_THEME,
    CREATE_THEME_BOOKS,
    CREATE_BOOKS_DETAILS,
    POST_THEME_BOOK,
} from '/components/redux/types';

import { actions } from '/components/redux/actions/actions';

export function createTheme() {
    return (dispatch) => {
        dispatch(actions.showLoader());

        axios.get(BASE_URL).then(({ data }) => {
            const themes = data.results;

            dispatch({ type: CREATE_THEME, payload: themes });
            dispatch(actions.hideLoader());
        });
    };
}

export function createThemeBooks({ theme, post = false }) {
    return (dispatch) => {
        dispatch(actions.showLoader());
        const THEME_URL =
            'https://api.nytimes.com/svc/books/v3/lists/' +
            `${theme}` +
            '.json?api-key=vOSzxnJYyQccxmzikoYzN3w0V4CXn0cO';

        axios.get(THEME_URL).then(({ data }) => {
            const themesBooks = data.results.books;
            dispatch({
                type: CREATE_THEME_BOOKS,
                payload: themesBooks,
                payload1: theme,
            });

            if (post) {
                dispatch({
                    type: POST_THEME_BOOK,
                    payload: themesBooks,
                });
            }
            dispatch(actions.hideLoader());
        });
    };
}

export function createBookDetails({ title, books }) {
    return (dispatch) => {
        dispatch(actions.showLoader());
        let book = books.filter((el) => el.title === title);
        dispatch({ type: CREATE_BOOKS_DETAILS, payload: book });

        dispatch(actions.hideLoader());
    };
}
