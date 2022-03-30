import { actions } from '/components/redux/actions/actions';

import {
    ALL_LOGIN,
    USER_VALIDALL_LOGIN,
    USER_REGISTRATION_LOGIN,
    USER_LOG_OUT,
} from '/components/redux/types';
import { onValue, ref, set } from 'firebase/database';

import { db } from '../../../firebase';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export function login() {
    return (dispatch) => {
        dispatch(actions.showLoader());
        onValue(
            ref(db),
            (snapshot) => {
                let res = Object.values(snapshot.val().users);
                dispatch({
                    type: ALL_LOGIN,
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

export function validation([{ login, email, password }]) {
    const auth = getAuth();

    return (dispatch) => {
        dispatch({
            type: USER_VALIDALL_LOGIN,
        });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({
                    type: USER_VALIDALL_LOGIN,
                    payload: { email: email, login: login, id: user.uid },
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('USER LOGIN ERROR>', errorCode, errorMessage);
            });
    };

}

export function registration({ login, email, password }) {
    const auth = getAuth();

    return (dispatch) => {
        dispatch({
            type: USER_REGISTRATION_LOGIN,
        });

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newId = user.uid;
                const userRef = ref(db, `users/${newId}`);
                dispatch({
                    type: USER_REGISTRATION_LOGIN,
                    payload: { email: email, login: login, id: newId },
                });

                set(userRef, {
                    login: login,
                    data: user.metadata.creationTime,
                    user: user.accessToken,
                    email: email,
                    password: password,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('ERROR New USER >', errorCode, errorMessage);
                console.log(`${email}`, 'is already in use by another user >');
            });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: USER_LOG_OUT,
        });
    };
}
