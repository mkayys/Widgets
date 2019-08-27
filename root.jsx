import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

let tabsArr = [
    { title: 'First', content: "Hello, I'm  first" },
    { title: 'Second', content: "Pulot" },
    { title: 'Third', content: 'peach' }
]

const Root = () => (
    <div>
        <h1>React is working!</h1>
        <Clock />
        <div className='tabs-weather'>
            <Tabs tabsArr={tabsArr} />
            <Weather />
        </div>
    </div>
);

export default Root;