/* eslint-disable no-param-reassign */
import produce from 'immer';
import { FETCH_ALL_STUDENTS_ERROR, FETCH_ALL_STUDENTS_SUCCESS } from 'user-constants';
import { Student } from 'types/index';

export interface StudentState {
    list: Student[];
    error?: string;
}

const initialState: StudentState = {
    list: [],
    error: ''
};

export const student = (state = initialState, action: any): StudentState => {
    const { type } = action;
    return produce(state, draft => {
        switch (type) {
            case FETCH_ALL_STUDENTS_SUCCESS: {
                draft.list = action.payload.students;
                break;
            }
            case FETCH_ALL_STUDENTS_ERROR: {
                draft.error = action.payload.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
