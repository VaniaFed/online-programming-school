import { TeacherState } from 'reducers/teacher';
import { createSelector } from 'reselect';
import { teacherSelector } from 'selectors/teacher-selector';

export const teacherListSelector = createSelector(
    teacherSelector,
    (teacher: TeacherState) => teacher.list
);
