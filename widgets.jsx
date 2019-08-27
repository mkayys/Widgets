import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

let names = ['Walker', 'Hey-Hey', 'MishFish', 'Charmander']

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root names={name} />, root);
});