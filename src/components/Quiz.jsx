import React from 'react';

import { Container, Card, Row, Col, Button } from 'react-bootstrap';

import CSILogo from './CSILogo';

import '../css/Quiz.css';

import illustration from '../images/design_01.png';

class Quiz extends React.Component {
    render() {
        return (
            <Container fluid='true' className='quizContainer'>
                <CSILogo />
                <div className='d-flex flex-column justify-content-around mainContent'>
                    <div>
                        <div className='domainName my-1'>Design</div>
                        <div className='questionNo'>Question 1)</div>
                        <Card className='quizCard questionCard my-1'>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Row>
                            <Col md='3'><img src={illustration} alt='Illustration' className='illustration'/></Col>
                            <Col>
                                <Card className='quizCard answerCard'>
                                <Card.Body>
                                    <textarea placeholder='Your answer here.' className='answerText p-2'/>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='buttonContainer mt-3'>
                            <Col md='3'></Col>
                            <Col className='d-flex justify-content-between'>
                                <Button className='text-uppercase'>Previous</Button>
                                <div>
                                    <Button className='text-uppercase mx-4'>Next</Button>
                                    <Button className='text-uppercase'>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Quiz;
