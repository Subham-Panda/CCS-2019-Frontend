import React from 'react';

import { Container, Card } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/Quiz.css';

class Quiz extends React.Component {
    render() {
        return (
            <Container fluid='true' className='quizContainer'>
                <CSILogo />
                <div>Design</div>
                <div>Question 1)</div>

                <Card className='quizCard'>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <div>
                    Answer:
                    <Card className='quizCard answerCard'>
                    <Card.Body>
                        <textarea className='answerText p-3'/>
                    </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    }
}

export default Quiz;
