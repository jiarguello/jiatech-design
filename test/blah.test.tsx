import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Header } from '../stories/header.stories';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
