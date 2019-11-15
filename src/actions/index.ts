import {
    fetchCoursesRequest,
    fetchCoursesSuccess,
    fetchCoursesError
} from 'actions/course';
import {
    fetchStudentsRequest,
    fetchStudentsSuccess,
    fetchStudentsError
} from 'actions/student';

import {
    fetchTeachersRequest,
    fetchTeachersSuccess,
    fetchTeachersError
} from 'actions/teacher';

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
