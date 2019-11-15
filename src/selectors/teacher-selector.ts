import { TeacherState } from 'reducers/teacher';
export const teacherSelector = (state: { teacher: TeacherState }) => {
    console.log(state);
    return state.teacher;
};
