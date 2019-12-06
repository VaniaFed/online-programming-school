import { FETCH_ALL_STUDENTS_ERROR, FETCH_ALL_STUDENTS_REQUEST, FETCH_ALL_STUDENTS_SUCCESS } from 'user-constants';
import { FetchStudentsErrorAction, FetchStudentsRequestAction, FetchStudentsSuccessAction } from './student-types';
import { Student } from 'types/index';

export const fetchStudentsRequest = (): FetchStudentsRequestAction => {
    return {
        type: FETCH_ALL_STUDENTS_REQUEST,
        payload: {}
    };
};

export const fetchStudentsSuccess = (
    students: Student[]
): FetchStudentsSuccessAction => {
    return {
        type: FETCH_ALL_STUDENTS_SUCCESS,
        payload: { students }
    };
};

export const fetchStudentsError = (error: string): FetchStudentsErrorAction => {
    return {
        type: FETCH_ALL_STUDENTS_ERROR,
        payload: { error }
    };
};
