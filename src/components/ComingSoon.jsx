import React from 'react';

import { Container } from 'react-bootstrap';
import Timer from './Timer';

import '../css/ComingSoon.css';

// Components
import CSILogo from '../components/CSILogo';

class Home extends React.Component {
    render () {
        return (
            <Container fluid='true' className='home text-center d-flex flex-column justify-content-around'>
                <CSILogo />

                <div className='textContainer m-auto'>
                    <div className='titleText text-uppercase m-auto pb-3'>
                        Core Committee Selections
                    </div>

                    <div className='taglineText m-auto'>
                        Be a part of CSI where skilled designers, developers and tech enthusiasts engage in a lot of projects and hackathons, to help push technology forward.
                    </div>
                    <div className="subtitleText pt-4 m-auto">Starts in</div>
                </div>

                <div className="timerContainer text-center m-auto">
                    <Timer />
                </div>
            </Container>
        );
    }
}

export default Home;
