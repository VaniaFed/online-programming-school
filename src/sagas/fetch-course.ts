import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { Course } from 'types/index';

import { FETCH_ALL_COURSES_REQUEST } from 'user-constants';
import { services } from 'services/index';

export function* fetchCourses() {
    try {
        const courses: Course[] = yield call(services.getCourses);
        yield put(actions.fetchCoursesSuccess(courses));
    } catch (error) {
        yield put(actions.fetchCoursesError(error.message));
    }
}

export function* watchFetchCourses() {
    yield takeEvery(FETCH_ALL_COURSES_REQUEST, fetchCourses);
}
