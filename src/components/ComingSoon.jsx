import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Button } from 'react-bootstrap';

// Components
import CSILogo from '../components/CSILogo';
import Timer from './Timer';

// CSS
import '../css/ComingSoon.css';

import csiIcon from '../images/favicon.png';

class ComingSoon extends React.Component {
    routeChange = () => {
        this.props.history.push('/register');
    }

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
                </div>

                <div className='timerContainer text-center m-auto'>
                    <div className='subtitleText pb-4 m-auto'>Starts in</div>
                    <Timer />
                </div>

                <div className='signupButtonContainer d-flex flex-column m-auto justify-content-center'>
                    <Button 
                    className='signupButton'
                    variant='light'
                    onClick={this.routeChange}>
                        <img src={csiIcon} alt='' className='csiIcon pr-2' />
                        Sign up for your CSI-VIT Account
                    </Button>
                </div>

            </Container>
        );
    }
}

export default withRouter(ComingSoon);
