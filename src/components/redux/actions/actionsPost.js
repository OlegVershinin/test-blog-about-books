import {
    POST_THEME,
    POST_BOOK,
    POST_THEME_BOOK,
} from '/components/redux/types';
import { actions } from '/components/redux/actions/actions';

export function themePost(theme) {
    if (!theme.length) {
        return (dispatch) => {
            dispatch({ type: POST_THEME, payload: theme });
            dispatch({
                type: POST_THEME_BOOK,
                payload: [],
            });
            dispatch({ type: POST_BOOK, payload: [] });
        };
    }
    const post = true;
    return (dispatch) => {
        dispatch(actions.createThemeBooks({ theme, post }));
        dispatch({ type: POST_THEME, payload: theme });
    };
}

export function bookPost(book) {
    return (dispatch) => {
        dispatch({ type: POST_BOOK, payload: book });
    };
}
