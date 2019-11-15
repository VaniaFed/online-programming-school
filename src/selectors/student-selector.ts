import { StudentState } from 'reducers/student';
export const studentSelector = (state: { student: StudentState }) =>
    state.student;
