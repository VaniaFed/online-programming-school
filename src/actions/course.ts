import {
    FETCH_ALL_COURSES_REQUEST,
    FETCH_ALL_COURSES_SUCCESS,
    FETCH_ALL_COURSES_ERROR
} from 'user-constants';
import {
    FetchCoursesRequestAction,
    FetchCoursesSuccessAction,
    FetchCoursesErrorAction
} from './course-types';
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
