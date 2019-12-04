import React from 'react';

import { Container, Card, Button } from 'react-bootstrap';
// import $ from 'jquery';
import '../css/Quiz.css';

class Quiz extends React.Component {
    render() {
        return (
            <Container fluid='true' className='d-flex flex-column justify-content-around quizContainer'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='domainName'>Domain: DESIGN</div>
                    </div>
                    <Card className='quizCard questionCard py-2 my-2'>
                        <Card.Title className='questionNo pl-3'>Question 1)</Card.Title>
                        <Card.Body className='questionCardBody py-0'>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.<br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. <br />
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <div className='py-2'>
                        <Card className='quizCard answerCard'>
                        <Card.Body>
                            <textarea placeholder='Your answer here.' className='answerText p-2'/>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='buttonContainer mt-1 d-flex justify-content-between'>
                        <div>
                        <Button className='text-uppercase'>Previous</Button>
                        </div>
                        <div>
                            <Button className='text-uppercase'>Next</Button>
                            <Button className='text-uppercase submitButton ml-4'>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className='questionStatusContainer d-flex justify-content-around py-2'>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                    <div className='questionStatus text-center'>10</div>
                </div>
            </Container>
        );
    }
}

export default Quiz;
