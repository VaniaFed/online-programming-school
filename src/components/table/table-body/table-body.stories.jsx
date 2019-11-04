import React from 'react';
import { storiesOf } from '@storybook/react';

import { TableBody } from './index';

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

storiesOf('TableBody', module).add('regular', () => <TableBody body={body} />);
