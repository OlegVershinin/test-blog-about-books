import {
    showLoader,
    hideLoader,
} from '/components/redux/actions/actionsShowLoader';
import {
    createTheme,
    createThemeBooks,
    createBookDetails,
} from '/components/redux/actions/actionsBook';
import {
    fidback,
    fidbackUsers,
    fidbackBooks,
    fidbackDesiredArray,
} from '/components/redux/actions/actionsFidback';
import {
    pagination,
    paginationBooks,
} from '/components/redux/actions/actionsPagination';
import {
    login,
    validation,
    registration,
    logout,
} from '/components/redux/actions/actionsLogin';
import { themePost, bookPost } from '/components/redux/actions/actionsPost';

export const actions = {
    showLoader: showLoader,
    hideLoader: hideLoader,
    createTheme: createTheme,
    createThemeBooks: createThemeBooks,
    createBookDetails: createBookDetails,
    fidback: fidback,
    fidbackUsers: fidbackUsers,
    fidbackBooks: fidbackBooks,
    fidbackDesiredArray: fidbackDesiredArray,
    pagination: pagination,
    paginationBooks: paginationBooks,
    login: login,
    validation: validation,
    registration: registration,
    logout: logout,
    themePost: themePost,
    bookPost: bookPost,
};
