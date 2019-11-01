import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('components/button/button.stories');
    require('components/card/card.stories');
    require('components/row-content/row-content.stories');
    require('components/table/table.stories');
}

configure(loadStories, module);
