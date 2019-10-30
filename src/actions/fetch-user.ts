import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from 'user-constants';

import { User } from 'types/index';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
        payload: {}
    };
};

export const fetchUserSuccess = (user: User) => ({
    type: FETCH_USER_SUCCESS,
    payload: {
        user
    }
});

export const fetchUserError = (error: string) => ({
    type: FETCH_USER_ERROR,
    payload: {
        error
    }
});
