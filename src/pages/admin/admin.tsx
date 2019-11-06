import React, { ReactNode } from 'react';
import styles from './standard-container.module.scss';
import { Courses } from './courses';
import { Students } from './students';
import './admin.scss';

interface StandartContainerProps {
    children: ReactNode;
}

const StandartContainer = ({ children }: StandartContainerProps) => (
    <div className={styles['standard-container']}>{children}</div>
);

export const Admin = () => {
    return (
        <StandartContainer>
            <h1 className="admin__h1">Admin panel</h1>
            <Courses className="admin__courses" />
            <Students className="admin__students" />
        </StandartContainer>
    );
};
