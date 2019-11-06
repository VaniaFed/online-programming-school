/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    FETCH_ALL_COURSES_SUCCESS,
    FETCH_ALL_COURSES_ERROR
} from 'user-constants';
import { Course } from 'types/index';

export interface CourseState {
    list: Course[];
}

const initialState = {
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
    // students: [
    //     {
    //         id: 0,
    //         fullName: '',
    //         course: ''
    //     }
    // ],
    // teachers: [
    //     {
    //         id: 0,
    //         fullName: '',
    //         topic: '',
    //         salary: '',
    //         dateStartWorking: '',
    //         passportData: ''
    //     }
    // ],
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
