import { fetchCoursesError, fetchCoursesRequest, fetchCoursesSuccess } from 'actions/course';
import { fetchStudentsError, fetchStudentsRequest, fetchStudentsSuccess } from 'actions/student';

import { fetchTeachersError, fetchTeachersRequest, fetchTeachersSuccess } from 'actions/teacher';

export const actions = {
    fetchCoursesRequest,
    fetchCoursesSuccess,
    fetchCoursesError,

    fetchStudentsRequest,
    fetchStudentsSuccess,
    fetchStudentsError,

    fetchTeachersRequest,
    fetchTeachersSuccess,
    fetchTeachersError
};
