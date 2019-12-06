/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    FETCH_ALL_COURSES_ERROR,
    FETCH_ALL_COURSES_SUCCESS
} from 'user-constants';
import { Course } from 'types/index';

export interface CourseState {
    list: Course[];
    error?: string;
}

const initialState: CourseState = {
    list: [
        {
            id: '',
            name: '',
            price: '',
            duration: '',
            imgPath: '',
            href: ''
        }
    ],
    error: ''
};

export const course = (state = initialState, action: any): CourseState => {
    const { type } = action;
    return produce(state, draft => {
        switch (type) {
            case FETCH_ALL_COURSES_SUCCESS: {
                draft.list = action.payload.courses;
                break;
            }
            case FETCH_ALL_COURSES_ERROR: {
                draft.error = action.payload.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
