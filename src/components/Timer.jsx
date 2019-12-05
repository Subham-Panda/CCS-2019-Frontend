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

    updateTimer = () => {
        this.setState({
            timeDiff: ms(this.state.time - new Date(), {colonNotation: true, secondsDecimalDigits: 0}).split(':'),
            days: 0,
            hours: this.state.timeDiff[0],
            minutes: this.state.timeDiff[1],
            seconds: this.state.timeDiff[2],
        })
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateTimer(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render () {
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
