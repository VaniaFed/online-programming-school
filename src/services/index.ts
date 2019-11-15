import { pipe } from 'rxjs';
import { getCourses } from './get-courses';
import { getStudents } from './get-students';
import { getTeachers } from './get-teachers';

const fetch = {
    getCourses,
    getStudents,
    getTeachers
};

const logger = (f: any) => ({
    getCourses: () => {
        console.log('getting courses');
        return f.getCourses();
    },
    getStudents: () => {
        console.log('getting students');
        return f.getStudents();
    },
    getTeachers: () => {
        console.log('getting teachers');
        return f.getTeachers();
    }
});

export const services = pipe(logger)(fetch);
