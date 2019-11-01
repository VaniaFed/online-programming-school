import React from 'react';
import { storiesOf } from '@storybook/react';

import { TableCell } from './index';

storiesOf('TableCell', module).add('regular', () => <TableCell text="hello" />);
