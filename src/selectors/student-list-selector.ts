import { StudentState } from 'reducers/student';
import { createSelector } from 'reselect';
import { studentSelector } from 'selectors/student-selector';

export const studentListSelector = createSelector(
    studentSelector,
    (student: StudentState) => student.list
);
