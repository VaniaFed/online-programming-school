import { CourseState } from 'reducers/course';
export const coursesSelector = (state: { course: CourseState }) =>
    state.course.list;
