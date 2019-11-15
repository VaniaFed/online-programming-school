import {
    FETCH_ALL_STUDENTS_REQUEST,
    FETCH_ALL_STUDENTS_ERROR,
    FETCH_ALL_STUDENTS_SUCCESS
} from 'user-constants';
import { Student } from 'src/types';

export interface FetchStudentsRequestAction {
    type: typeof FETCH_ALL_STUDENTS_REQUEST;
    payload: {};
}

export interface FetchStudentsSuccessAction {
    type: typeof FETCH_ALL_STUDENTS_SUCCESS;
    payload: {
        students: Student[];
    };
}

export interface FetchStudentsErrorAction {
    type: typeof FETCH_ALL_STUDENTS_ERROR;
    payload: {
        error: string;
    };
}
