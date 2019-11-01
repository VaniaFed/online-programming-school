import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './index';

storiesOf('Card', module)
    .add('no-link', () => (
        <Card
            text="Hello"
            imgPath="https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg"
        />
    ))
    .add('link', () => (
        <Card
            text="Hello"
            imgPath="https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg"
            href="https://vk.com/itzslize"
        />
    ));
