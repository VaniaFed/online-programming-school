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
    [
        {
            text: 'Федяков Иван Дмитриевич',
            href: 'https://vk.com/im?sel=201610900'
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
    [
        {
            text: 'Федяков Иван Дмитриевич',
            href: 'https://vk.com/vaniafed'
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
    ]
];

storiesOf('Table', module).add('regular', () => (
    <Table headers={headers} body={body} />
));
