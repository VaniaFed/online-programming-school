import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('components/button/button.stories');
    require('components/card/card.stories');
    require('components/sell-card-layout/sell-card/sell-card.stories');
    require('components/sell-card-layout/sell-card-layout.stories');
    require('components/card-layout/card-layout.stories');
    require('components/table/table.stories');
}

configure(loadStories, module);
