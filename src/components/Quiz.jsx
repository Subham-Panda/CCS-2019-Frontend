import React from 'react';

import { Container, Row } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/Quiz.css';

class Quiz extends React.Component {
    render() {
        return (
            <Container>
                <CSILogo />
            </Container>
        );
    }
}

export default Quiz;
