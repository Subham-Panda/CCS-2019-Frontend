import React from 'react';

import '../css/Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.date || new Date(2019, 11, 6, 12),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    updateTimer = () => {
        let m = this.state.time - new Date();
        if (m < 0) m = 0;
        let seconds, hours, minutes, days, day, minute, hour, second;
        second = 1000
        minute = 60 * second
        hour = 60 * minute
        day = 24 * hour
        days = Math.floor(m / day)
        m -= (day * days)
        hours = Math.floor(m / hour)
        m -= (hour * hours)
        minutes = Math.floor(m / minute)
        m -= (minute * minutes)
        seconds = Math.floor(m / second)
        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        })
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateTimer(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        return (
            <div className='m-auto text-center d-flex justify-content-around timer'>
                <div className='days'>{this.state.days}<div className='timeUnit'>days</div></div>
                <div className='hours'>{this.state.hours}<div className='timeUnit'>hours</div></div>
                <div className='minutes'>{this.state.minutes}<div className='timeUnit'>minutes</div></div>
                <div className='seconds'>{this.state.seconds}<div className='timeUnit'>seconds</div></div>
            </div>
        );
    }
}

export default Timer;
