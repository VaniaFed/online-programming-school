import React, { ReactNode } from 'react';
import styles from './standard-container.module.scss';
import { Courses } from './courses';
import { Students } from './students';
import { Teachers } from './teachers';
import './admin.scss';

interface StandardContainerProps {
    children: ReactNode;
}

const StandardContainer = ({ children }: StandardContainerProps) => (
    <div className={styles['standard-container']}>{children}</div>
);

export const Admin = () => {
    return (
        <StandardContainer>
            <h1 className="admin__h1">Admin panel</h1>
            <Courses className="admin__courses"/>
            <Students className="admin__students"/>
            <Teachers className="admin__students"/>
        </StandardContainer>
    );
};
