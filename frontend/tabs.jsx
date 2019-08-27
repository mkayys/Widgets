import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        return (e) => {
            e.preventDefault();
            this.setState( { selected: idx });
        }
    }

    render() {
        const tabTitles = this.props.tabsArr.map( (tab, idx) => {
            return <h1 onClick={this.handleClick(idx)} key={idx}>{tab.title}</h1>
        });

        return (
            <div className='tabs-container'>
                <div>This is a tab</div>
                <div>{tabTitles}</div>
                <div>{this.props.tabsArr[this.state.selected].content}</div>
            </div>
        )
    }
}

export default Tabs;