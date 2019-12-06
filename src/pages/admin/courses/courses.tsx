import React, { useEffect, useState } from 'react';
import { CardLayout } from 'components/card-layout';
import { useDispatch, useSelector } from 'react-redux';
import { courseListSelector } from 'selectors/courses-list-selector';
import { Button } from 'components/button';
import { Modal } from 'components/modal';
import { actions } from 'actions/index';
import { addCourseRequest } from 'services/send-data-to-server';
import { Course } from 'src/types';
import styles from './courses.module.scss';

interface Props {
    className?: string;
}

export const Courses = ({ className }: Props) => {
    const dispatch = useDispatch();
    const courses: Course[] = useSelector(courseListSelector);

    useEffect(() => {
        dispatch(actions.fetchCoursesRequest());
    }, []);

    const [isModalShowed, setIsModalShowed] = useState(false);
    const showModal = () => setIsModalShowed(true);
    const closeModal = () => setIsModalShowed(false);
    const coursesModalFields = [{ key: 'name', text: 'Name' }];
    const validate = (fields: any) => {
        const validFields = fields;
        if (!fields.name) {
            validFields.name = '';
        }
        return validFields;
    };
    const addCourseAndCloseModal = (courseData: any) => {
        validate(courseData);
        const { name } = courseData;
        console.log('adding course: ', courseData);
        if (courseData !== {} && name.length >= 5) {
            addCourseRequest(courseData);
            closeModal();
        }
    };
    return (
        <div className={className}>
            <h2 className="admin__h2">Courses</h2>
            <CardLayout data={courses as any} />
            <Modal
                fields={coursesModalFields}
                title="Add a course"
                onSubmit={coursesData => {
                    addCourseAndCloseModal(coursesData);
                }}
                validate={(fields: any) => {
                    validate(fields);
                }}
                className={!isModalShowed && 'hidden'}
                onCloseModal={closeModal}
            />
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={() => {
                    showModal();
                }}
            />
        </div>
    );
};
