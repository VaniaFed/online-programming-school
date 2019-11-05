import React from 'react';
import { storiesOf } from '@storybook/react';

import { SellCard } from './index';

storiesOf('SellCard', module)
    .add('no-link', () => (
        <SellCard
            text="Hello"
            imgPath="https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg"
            duration="3 months"
            price="$20"
        />
    ))
    .add('link', () => (
        <SellCard
            text="Hello"
            imgPath="https://sun9-30.userapi.com/c855532/v855532792/2b16e/f9aF_gFPP98.jpg"
            href="https://vk.com/itzslize"
            duration="3 months"
            price="$20"
        />
    ));
