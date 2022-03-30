import { USER_PER_PAGE, USER_PER_PAGE_BT } from "/util/constans";
import { PAGE_NUMBER, PAGE_NUMBER_BOOKS } from "/components/redux/types";

export function pagination(posts, page) {
    const startIndex = (page - 1) * USER_PER_PAGE;
    const selectedPost = posts.slice(startIndex, startIndex + USER_PER_PAGE);

    return (dispatch) => {
        dispatch({
            type: PAGE_NUMBER,
            payload: page,
            payload1: selectedPost,
        });
    };
}

export function paginationBooks(posts, page, theme) {
    const startIndex = (page - 1) * USER_PER_PAGE_BT;
    const selectedPost = posts.slice(startIndex, startIndex + USER_PER_PAGE_BT);

    return (dispatch) => {
        dispatch({
            type: PAGE_NUMBER_BOOKS,
            payload: page,
            payload1: selectedPost,
            payload2: theme,
        });
    };
}
