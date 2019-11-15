import { all } from 'redux-saga/effects';
import { watchFetchCourses } from './fetch-course';
import { watchFetchStudents } from './fetch-student';
import { watchFetchTeachers } from './fetch-teacher';

export function* rootSaga() {
    yield all([
        watchFetchCourses(),
        watchFetchStudents(),
        watchFetchTeachers()
    ]);
}
