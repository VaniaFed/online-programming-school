import { FETCH_ALL_COURSES_ERROR, FETCH_ALL_COURSES_REQUEST, FETCH_ALL_COURSES_SUCCESS } from 'user-constants';
import { FetchCoursesErrorAction, FetchCoursesRequestAction, FetchCoursesSuccessAction } from './course-types';
import { Course } from 'types/index';

export const fetchCoursesRequest = (): FetchCoursesRequestAction => {
    return {
        type: FETCH_ALL_COURSES_REQUEST,
        payload: {}
    };
};

export const fetchCoursesSuccess = (
    courses: Course[]
): FetchCoursesSuccessAction => {
    return {
        type: FETCH_ALL_COURSES_SUCCESS,
        payload: { courses }
    };
};

export const fetchCoursesError = (error: string): FetchCoursesErrorAction => {
    return {
        type: FETCH_ALL_COURSES_ERROR,
        payload: { error }
    };
};
