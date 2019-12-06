import { CourseState } from 'reducers/course';

export const courseSelector = (state: { course: CourseState }) => state.course;
