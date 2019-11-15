import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { Teacher } from 'types/index';

import { FETCH_ALL_TEACHERS_REQUEST } from 'user-constants';
import { services } from 'services/index';

export function* fetchTeachers() {
    try {
        const teachers: Teacher[] = yield call(services.getTeachers);
        yield put(actions.fetchTeachersSuccess(teachers));
    } catch (error) {
        yield put(actions.fetchTeachersError(error.message));
    }
}

export function* watchFetchTeachers() {
    yield takeEvery(FETCH_ALL_TEACHERS_REQUEST, fetchTeachers);
}
