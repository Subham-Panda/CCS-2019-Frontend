import React from 'react';

import ms from 'pretty-ms';
import '../css/Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.date || new Date(2019, 11, 6, 12),
            timeDiff: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    render () {
        setInterval(() => this.setState({
            timeDiff: this.state.time - new Date(),
            days: ms(this.state.timeDiff).split('d')[0],
            hours: ms(this.state.timeDiff).split('h')[0].split('d')[1],
            minutes: ms(this.state.timeDiff).split('m')[0].split('h')[1],
            seconds: ms(this.state.timeDiff, {secondsDecimalDigits: 0}).split('s')[0].split('m')[1],
        }), 1000);
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
