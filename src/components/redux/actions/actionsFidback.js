import { onValue, ref } from 'firebase/database';
import { db } from '../../../firebase';
import { actions } from '/components/redux/actions/actions';

import {
    ALL_FIDBACK,
    ALL_BOOKS,
    ALL_USERS,
    DESIRED_ARRAY,
} from '/components/redux/types';

export function fidback() {
    return (dispatch) => {
        dispatch(actions.showLoader());
        onValue(
            ref(db),
            (snapshot) => {
                let res = Object.values(snapshot.val().fidback);
                dispatch({
                    type: ALL_FIDBACK,
                    payload: res,
                });
                dispatch(actions.hideLoader());
            },
            {
                onlyOnce: false,
            }
        );
    };
}

export function fidbackUsers(allFidback, allUserState) {
    const allUserDb = allFidback.map((el) => el.user);
    const combinedUsers = [...allUserState, ...allUserDb];
    const uniqUsers = [...new Set(combinedUsers)];

    return (dispatch) => {
        dispatch({
            type: ALL_USERS,
            payload: uniqUsers,
        });
    };
}

export function fidbackBooks(allFidback, allBooksState) {
    const allBooksDb = allFidback.map((el) => el.book);
    const combinedBooks = [...allBooksState, ...allBooksDb];
    const uniqBooks = [...new Set(combinedBooks)];

    return (dispatch) => {
        dispatch({
            type: ALL_BOOKS,
            payload: uniqBooks,
        });
    };
}

export function fidbackDesiredArray(desiredArray) {
    return (dispatch) => {
        dispatch({
            type: DESIRED_ARRAY,
            payload: desiredArray,
        });
    };
}
