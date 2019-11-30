import React from 'react';

import ms from 'pretty-ms';
import '../css/Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.date || new Date(2019, 11, 6, 12),
            timeDiff: '',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    render () {
        console.log(ms(this.state.time - new Date(), {colonNotation: true}))
        setInterval(() => this.setState({
            timeDiff: ms(this.state.time - new Date(), {colonNotation: true, secondsDecimalDigits: 0}).split(':'),
            days: this.state.timeDiff[0],
            hours: this.state.timeDiff[1],
            minutes: this.state.timeDiff[2],
            seconds: this.state.timeDiff[3],
        }), 20);
        return (
            <div className="m-auto text-center d-flex justify-content-around timer">
                <div className="days">{this.state.days}</div>
                <div className="hours">{this.state.hours}</div>
                <div className="minutes">{this.state.minutes}</div>
                <div className="seconds">{this.state.seconds}</div>
            </div>
        );
    }
}

export default Timer;
