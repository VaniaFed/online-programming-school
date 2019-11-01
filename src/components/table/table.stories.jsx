import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from './index';

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

const body = [
    {
        text: 'helel',
        href: 'vk.com'
    },
    {
        text: 'helel'
    },
    {
        text: 'helel'
    }
];

storiesOf('Table', module).add('regular', () => (
    <Table headers={headers} body={body} />
));
