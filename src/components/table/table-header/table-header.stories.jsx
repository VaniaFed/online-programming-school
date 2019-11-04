import React from 'react';
import { storiesOf } from '@storybook/react';

import { TableHeader } from './index';

const headers = [
    {
        text: 'hello'
    },
    {
        text: 'hello'
    },
    {
        text: 'hello'
    }
];

storiesOf('TableHeader', module).add('regular', () => (
    <TableHeader headers={headers} />
));
