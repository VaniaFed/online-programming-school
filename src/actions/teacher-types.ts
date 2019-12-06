import { FETCH_ALL_TEACHERS_ERROR, FETCH_ALL_TEACHERS_REQUEST, FETCH_ALL_TEACHERS_SUCCESS } from 'user-constants';
import { Teacher } from 'src/types';

export interface FetchTeachersRequestAction {
    type: typeof FETCH_ALL_TEACHERS_REQUEST;
    payload: {};
}

export interface FetchTeachersSuccessAction {
    type: typeof FETCH_ALL_TEACHERS_SUCCESS;
    payload: {
        teachers: Teacher[];
    };
}

export interface FetchTeachersErrorAction {
    type: typeof FETCH_ALL_TEACHERS_ERROR;
    payload: {
        error: string;
    };
}
