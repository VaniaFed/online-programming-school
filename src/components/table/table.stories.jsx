import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from './index';

const headers = [
    {
        text: 'ФИО'
    },
    {
        text: 'Тема'
    },
    {
        text: 'Зарплата'
    },
    {
        text: 'Дата начала работы'
    },
    {
        text: 'Паспортные данные'
    }
];

const body = [
    {
        cells: [
            {
                text: 'Федяков Иван Дмитриевич'
            },
            {
                text: 'Css'
            },
            {
                text: '200к'
            },
            {
                text: '2019.11.01'
            },
            {
                text: '4353 123123'
            }
        ],
        id: 1
    },
    {
        cells: [
            {
                text: 'Федяков Иван Дмитриевич'
            },
            {
                text: 'Css'
            },
            {
                text: '200к'
            },
            {
                text: '2019.11.01'
            },
            {
                text: '4353 123123'
            }
        ],
        id: 2
    }
];

const data = {
    headers,
    body
};
const actions = [
    {
        type: 'delete',
        fn: id => {
            console.log(`deleted: ${id}`);
        },
        text: 'Delete'
    },
    {
        type: 'edit',
        fn: id => {
            console.log(`changed: ${id}`);
        },
        text: 'Edit'
    }
];

storiesOf('Table', module).add('regular', () => (
    <Table data={data} actions={actions} />
));
