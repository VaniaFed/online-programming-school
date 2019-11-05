import React from 'react';
import { storiesOf } from '@storybook/react';

import { CardLayout } from './index';

const rowDataWithLinks = [
    {
        text: 'Frontend development',
        imgPath: 'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
        href: 'https://vk.com/itzslize',
        duration: '4 months',
        price: '$20'
    },
    {
        text: 'Java scientist',
        imgPath:
            'https://cdn.vox-cdn.com/thumbor/FDD76YJZJFPyNUfT3ZBHcnMA0Ec=/43x0:593x367/1200x800/filters:focal(43x0:593x367)/cdn.vox-cdn.com/uploads/chorus_image/image/48667835/dbgxt2rvpd26udoyzcqn.0.0.jpg',
        href: 'https://vk.com/itzslize',
        duration: '4 months',
        price: '$20'
    },
    {
        text: 'Database scientist',
        imgPath:
            'https://www.techdonut.co.uk/sites/default/files/managed-server-hosting-your-server-in-the-cloud-523968604.jpg',
        href: 'https://vk.com/itzslize',
        duration: '4 months',
        price: '$20'
    }
];
const rowDataWithoutLinks = [
    {
        text: 'Frontend development',
        imgPath: 'https://i.udemycdn.com/course/750x422/2314744_c707.jpg',
        duration: '4 months',
        price: '$20'
    },
    {
        text: 'Java scientist',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg',
        duration: '4 months',
        price: '$20'
    },
    {
        text: 'Database scientist',
        imgPath:
            'https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg',
        duration: '4 months',
        price: '$20'
    }
];
storiesOf('CardLayout', module)
    .add('link', () => <CardLayout data={rowDataWithLinks} />)
    .add('no-link', () => <CardLayout data={rowDataWithoutLinks} />);
