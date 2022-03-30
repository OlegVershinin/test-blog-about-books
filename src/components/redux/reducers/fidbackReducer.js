import {
    ALL_FIDBACK,
    ALL_USERS,
    ALL_BOOKS,
    DESIRED_ARRAY,
    ALL_LOGIN,
    USER_VALIDALL_LOGIN,
    USER_REGISTRATION_LOGIN,
    USER_LOG_OUT,
} from '/components/redux/types';

const initialState = {
    all_fidback: [],
    all_users: [],
    all_books: [],
    desired_array: [],
    all_login: [],
    auth: false,
    user: {
        email: null,
        login: null,
        id: null,
    },
};

export const fidbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_FIDBACK:
            return {
                ...state,
                all_fidback: action.payload,
            };
        case ALL_USERS:
            return {
                ...state,
                all_users: action.payload,
            };
        case ALL_BOOKS:
            return {
                ...state,
                all_books: action.payload,
            };
        case DESIRED_ARRAY:
            return {
                ...state,
                desired_array: action.payload,
            };
        case ALL_LOGIN:
            return {
                ...state,
                all_login: action.payload,
            };
        case USER_VALIDALL_LOGIN:
            return {
                ...state,
                auth: true,
                user: action.payload,
            };
        case USER_REGISTRATION_LOGIN:
            console.log('PAYLOAD >', action.payload);
            return {
                ...state,
                auth: true,
                user: action.payload,
            };
        case USER_LOG_OUT:
            console.log('TYPE>', action.type);
            console.log('Мы в редюсере!!!>', action.type);

            return {
                ...state,
                auth: false,
            };

        default:
            return state;
    }
};
