import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

let tabsArr = [
    { title: 'First', content: "Hello, I'm  first" },
    { title: 'Second', content: "Pulot" },
    { title: 'Third', content: 'peach' }
]

const Root = () => (
    <div>
        <h1>React is working!</h1>
        <Clock />
        <Tabs />
    </div>
);

export default Root;