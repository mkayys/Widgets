import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: new Date() });
    }

    componentDidMount() {
        this.ticker = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    render() {
        let seconds = this.state.time.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        let minutes = this.state.time.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let hours = this.state.time.getHours();

        let dateString = this.state.time.toString();
        let date = dateString.split(' ').slice(0, 4).join(' ');

        return (
            <div className='clock-component'>Clock
                <div className='clock-container'>
                    <div className='time-container'>
                        <div className='time-label'>Time:</div> 
                        <div className='time'>{hours}:{minutes}:{seconds}</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-label'>Date:</div>
                        <div className='date'>{date}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Clock;