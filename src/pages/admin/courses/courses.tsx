import React, { useEffect } from 'react';
import { CardLayout } from 'components/card-layout';
import { Button } from 'components/button';
import { Card } from 'types/index';
import styles from './courses.module.scss';

interface Props {
    className?: string;
}

const coursesTemporaryData: Card[] = [
    {
        text: 'Frontend development',
        imgPath: 'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
        href: 'https://vk.com/itzslize'
    },
    {
        text: 'Java scientist',
        imgPath:
            'https://cdn.vox-cdn.com/thumbor/FDD76YJZJFPyNUfT3ZBHcnMA0Ec=/43x0:593x367/1200x800/filters:focal(43x0:593x367)/cdn.vox-cdn.com/uploads/chorus_image/image/48667835/dbgxt2rvpd26udoyzcqn.0.0.jpg',
        href: 'https://vk.com/itzslize'
    },
    {
        text: 'Database scientist',
        imgPath:
            'https://www.techdonut.co.uk/sites/default/files/managed-server-hosting-your-server-in-the-cloud-523968604.jpg',
        href: 'https://vk.com/itzslize'
    }
];

const getCourses = () => {
    fetch('/api/courses', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        });
};
const addCourse = () => {
    console.log('The course was added');
};

export const Courses = ({ className }: Props) => {
    useEffect(() => {
        getCourses();
    });
    return (
        <div className={className}>
            <h2 className="admin__h2">Courses</h2>
            <CardLayout data={coursesTemporaryData} />
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={addCourse}
            />
        </div>
    );
};
