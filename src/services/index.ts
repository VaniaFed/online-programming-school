import { pipe } from 'rxjs';
import { getCourses } from './get-courses';

const fetch = {
    getCourses
};

const logger = (f: any) => ({
    getCourses: () => {
        console.log('getting course');
        return f.getCourses();
    }
});

export const services = pipe(logger)(fetch);
