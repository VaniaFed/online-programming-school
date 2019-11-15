import { combineReducers } from 'redux';
import { course } from 'reducers/course';
import { student } from 'reducers/student';
import { teacher } from 'reducers/teacher';

export const rootReducer = combineReducers({
    course,
    student,
    teacher
});
