import React, { useEffect } from 'react';
import { CardLayout } from 'components/card-layout';
import { useDispatch, useSelector } from 'react-redux';
import { courseListSelector } from 'selectors/courses-list-selector';
import { Button } from 'components/button';
import { actions } from 'actions/index';
import { Course } from 'src/types';
import styles from './courses.module.scss';

interface Props {
    className?: string;
}

const addCourse = () => {
    console.log('The course was added');
};

export const Courses = ({ className }: Props) => {
    const dispatch = useDispatch();
    const courses: Course[] = useSelector(courseListSelector);

    useEffect(() => {
        dispatch(actions.fetchCoursesRequest());
    }, []);

    return (
        <div className={className}>
            <h2 className="admin__h2">Courses</h2>
            <CardLayout data={courses as any} />
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={addCourse}
            />
        </div>
    );
};
