import React from 'react';
import ReactDOM from 'react-dom';
import FilterOptions from './FilterOptions'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterOptions />, div);
    ReactDOM.unmountComponentAtNode(div);
});