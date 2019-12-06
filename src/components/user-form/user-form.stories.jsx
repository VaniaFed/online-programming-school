import React from 'react';
import { storiesOf } from '@storybook/react';

import { UserForm } from './index';

const formFieldsData = [{ key: 'username', text: 'User name' }];
storiesOf('UserForm', module).add('regular', () => (
    <UserForm
        title="Form title"
        fieldsData={formFieldsData}
        onSubmit={() => {
        }}
    />
));
