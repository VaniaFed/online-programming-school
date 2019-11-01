import React from 'react';
import { storiesOf } from '@storybook/react';

import { RowContent } from './index';

const rowDataWithLinks = [
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg',
        href: 'https://vk.com/itzslize'
    },
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg',
        href: 'https://vk.com/itzslize'
    },
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg',
        href: 'https://vk.com/itzslize'
    }
];
const rowDataWithoutLinks = [
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg'
    },
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg'
    },
    {
        text: 'Hello',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg'
    }
];
storiesOf('RowContent', module)
    .add('link', () => <RowContent data={rowDataWithLinks} />)
    .add('no-link', () => <RowContent data={rowDataWithoutLinks} />);
