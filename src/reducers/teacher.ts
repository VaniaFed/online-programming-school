/* eslint-disable no-param-reassign */
import produce from 'immer';
import { FETCH_ALL_TEACHERS_ERROR, FETCH_ALL_TEACHERS_SUCCESS } from 'user-constants';
import { Teacher } from 'types/index';

export interface TeacherState {
    list: Teacher[];
    error?: string;
}

const initialState: TeacherState = {
    list: [],
    error: ''
};

export const teacher = (state = initialState, action: any): TeacherState => {
    const { type } = action;
    return produce(state, draft => {
        switch (type) {
            case FETCH_ALL_TEACHERS_SUCCESS: {
                console.log(action);
                draft.list = action.payload.teachers;
                break;
            }
            case FETCH_ALL_TEACHERS_ERROR: {
                draft.error = action.payload.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
