import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';

let tabsArr = [
    { title: 'First', content: "Hello, I'm  first" },
    { title: 'Second', content: "Pulot" },
    { title: 'Third', content: 'peach' }
];

const Root = (props) => (
    <div>
        <Clock />
        <div className='tabs-weather'>
            <Tabs tabsArr={tabsArr} />
            <Weather />
        </div>
        <AutoComplete names={props.names} />
    </div>
);

export default Root;