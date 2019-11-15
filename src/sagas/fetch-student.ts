import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { Student } from 'types/index';

import { FETCH_ALL_STUDENTS_REQUEST } from 'user-constants';
import { services } from 'services/index';

export function* fetchStudents() {
    try {
        const students: Student[] = yield call(services.getStudents);
        yield put(actions.fetchStudentsSuccess(students));
    } catch (error) {
        yield put(actions.fetchStudentsError(error.message));
    }
}

export function* watchFetchStudents() {
    yield takeEvery(FETCH_ALL_STUDENTS_REQUEST, fetchStudents);
}
