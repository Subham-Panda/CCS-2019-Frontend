import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Button, Alert } from 'react-bootstrap';

// Components
import CSILogo from '../components/CSILogo';
import Timer from './Timer';

// CSS
import '../css/ComingSoon.css';

import csiIcon from '../images/favicon.png';

class ComingSoon extends React.Component {
    routeChange = () => {
        this.props.history.push('/login');
    }

    renderInvalidAlert = () => {
        if (this.props.invalidUser) {
            return <Alert variant='danger' className='loggedInAlert'>
                Induction are only open to 1<sup>st</sup> year students!
            </Alert>;
        } else {
            return null;
        }
    }

    renderButton = () => {
        if (!this.props.loggedIn) {
            if (this.props.invalidUser) {
                return <Alert variant='danger' className='loggedInAlert'>
                    Inductions are only open to 1<sup>st</sup> year students!
                </Alert>;
            } else {
                if (!this.props.isTimeOver)
                return <Button
                    className='signupButton'
                    variant='light'
                    onClick={this.routeChange}>
                    <img src={csiIcon} alt='' className='csiIcon pr-2' />
                    Login to your CSI-VIT account to begin
                 </Button>;
                else return <Alert variant='success' className='loggedInAlert'>
                Round 1 for <b>CCS-2019</b> is over! The shortlisted participants will be contacted via SMS or call.
            </Alert>;
            }
        } else {
            return <Alert variant='success' className='loggedInAlert'>
                Round 1 for <b>CCS-2019</b> is over! The shortlisted participants will be contacted via SMS or call.
            </Alert>;
        }
    }

    render() {
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
                    <Timer date={this.props.timeEnd}/>
                </div>

                <div className='signupButtonContainer d-flex flex-column m-auto justify-content-center'>
                    {this.renderButton()}
                </div>

            </Container>
        );
    }
}

export default withRouter(ComingSoon);
