import React from 'react';
import { Container } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/End.css';
class Loading extends React.Component {
    render () {
        return (
            <Container>
                <CSILogo />
                <div className='endContent d-flex flex-column justify-content-center text-center'>
                    <div className='top'>Loading...</div>
                </div>
            </Container>
        );
    }
}

export default Loading;
