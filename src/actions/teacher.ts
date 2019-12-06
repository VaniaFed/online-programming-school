import { FETCH_ALL_TEACHERS_ERROR, FETCH_ALL_TEACHERS_REQUEST, FETCH_ALL_TEACHERS_SUCCESS } from 'user-constants';
import { FetchTeachersErrorAction, FetchTeachersRequestAction, FetchTeachersSuccessAction } from './teacher-types';
import { Teacher } from 'types/index';

export const fetchTeachersRequest = (): FetchTeachersRequestAction => {
    return {
        type: FETCH_ALL_TEACHERS_REQUEST,
        payload: {}
    };
};

export const fetchTeachersSuccess = (
    teachers: Teacher[]
): FetchTeachersSuccessAction => {
    return {
        type: FETCH_ALL_TEACHERS_SUCCESS,
        payload: { teachers }
    };
};

export const fetchTeachersError = (error: string): FetchTeachersErrorAction => {
    return {
        type: FETCH_ALL_TEACHERS_ERROR,
        payload: { error }
    };
};
