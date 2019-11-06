import {
    FETCH_ALL_COURSES_REQUEST,
    FETCH_ALL_COURSES_ERROR,
    FETCH_ALL_COURSES_SUCCESS
} from 'user-constants';
import { Course } from 'src/types';

export interface FetchCoursesRequestAction {
    type: typeof FETCH_ALL_COURSES_REQUEST;
    payload: {};
}

export interface FetchCoursesSuccessAction {
    type: typeof FETCH_ALL_COURSES_SUCCESS;
    payload: {
        courses: Course[];
    };
}

export interface FetchCoursesErrorAction {
    type: typeof FETCH_ALL_COURSES_ERROR;
    payload: {
        error: string;
    };
}
