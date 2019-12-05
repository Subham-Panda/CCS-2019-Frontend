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
                    <div className='top'>You need to <span className='thankyou'>login</span> first!</div>
                    <div className='bottom mt-4'>Click <a href='/'>here</a> to teleport to the home page.</div>
                </div>
            </Container>
        );
    }
}

export default End;
