import React from 'react';

import { Container, Card, Button } from 'react-bootstrap';
import API from '../API';
// import $ from 'jquery';
import '../css/Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: undefined,
            timeStarted: undefined,
            timeEnded: undefined,
            currentQuestion: 1,
        }
    }

    renderQuestion = () => {
        if (this.state.questions) {
            return this.state.questions[0].question;
        } else {
            return <i>Loading question...</i>;
        }
    }

    handleNext = () => {

    }

    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        API.post('/quiz/start', {domain: this.props.domain})
        .then((response) => {
            if (!response.data.success) {
                console.log('Server Error');
            } else {
                this.setState(() => ({
                    questions: response.data.responses,
                    timeStarted: response.data.time.timeStarted,
                    timeEnded: response.data.time.timeEnded,
                }));
            }
        });
    }

    render() {
        return (
            <Container fluid='true' className='d-flex flex-column justify-content-center quizContainer'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='domainName mb-2'>Domain: <span className='domainProp'>{this.props.domain}</span></div>
                        <div className='quizTimer pr-4'><FontAwesomeIcon icon={faClock} /> 25:33</div>
                    </div>
                    <Card className='quizCard questionCard py-3 my-2 px-2'>
                        <Card.Title className='questionNo pl-3'>Question 1)</Card.Title>
                        <Card.Body className='questionCardBody py-0'>
                            <Card.Text>
                                {this.renderQuestion()}
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
                    <div className='buttonContainer mt-1 d-flex px-4 justify-content-between'>
                        <div>
                        <Button className='text-uppercase'>Previous</Button>
                        </div>
                        <div>
                            <Button className='text-uppercase'>Next</Button>
                            <Button className='text-uppercase submitButton ml-4'>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className='questionStatusContainer mx-auto mt-4'>
                    <div className='mx-4 questionStatusAttempted questionStatus text-center'>1</div>
                    <div className='mx-4 questionStatusAttempted questionStatus text-center'>2</div>
                    <div className='mx-4 questionStatusAttempted questionStatus text-center'>3</div>
                    <div className='mx-4 questionStatusCurrent questionStatus text-center'>4</div>
                    <div className='mx-4 questionStatus text-center'>5</div>
                    <div className='mx-4 questionStatus text-center'>6</div>
                    <div className='mx-4 questionStatus text-center'>7</div>
                    <div className='mx-4 questionStatus text-center'>8</div>
                    <div className='mx-4 questionStatus text-center'>9</div>
                    <div className='mx-4 questionStatus text-center'>10</div>
                </div>
            </Container>
        );
    }
}

export default Quiz;
