import React from 'react';
import { Container } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/End.css';
class End extends React.Component {
    render () {
        return (
            <Container>
                <CSILogo />
                <div className='endContent d-flex flex-column justify-content-center text-center'>
                    <div className='top'><span className='thankyou'>Thank you</span> for playing!</div>
                    <div className='bottom mt-4'>Your quiz for the <b>{this.props.domain}</b> domain has ended. You may attempt the quizzes for the remaining domains <a href='/'>here</a>.</div>
                </div>
            </Container>
        );
    }
}

export default End;
