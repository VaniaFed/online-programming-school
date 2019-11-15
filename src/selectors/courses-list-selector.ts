import { CourseState } from 'reducers/course';
import { createSelector } from 'reselect';
import { courseSelector } from 'selectors/course-selector';

export const courseListSelector = createSelector(
    courseSelector,
    (course: CourseState) => course.list
);
