import { all } from 'redux-saga/effects';
import { watchFetchCourses } from './fetch-course';

export function* rootSaga() {
    yield all([watchFetchCourses()]);
}
