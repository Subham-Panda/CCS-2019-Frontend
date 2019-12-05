import React from 'react';
import { Container } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/End.css';
class DomainInProgress extends React.Component {
    render () {
        return (
            <Container>
                <CSILogo />
                <div className='endContent d-flex flex-column justify-content-center text-center'>
                    <div className='top'><span className='thankyou'>Quiz for another domain is already in progress!</span></div>
                    <div className='bottom mt-4'>You may end the quiz for the domain <b>{this.props.domain}</b> by clicking <a href={`/quiz/${this.props.domain}`}>here</a>.</div>
                </div>
            </Container>
        );
    }
}

export default DomainInProgress;
