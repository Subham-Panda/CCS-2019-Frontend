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

    renderQuestionSelector() {
        if (!this.state.questions) {
            return;
        }

        const selectors = [];
        for (let i = 0; i < this.state.questions.length; i++) {
            const q = this.state.questions[i];
            let classN = '';
            if (i === (this.state.currentQuestion-1)) {
                classN = 'questionStatusCurrent';
            } else if (q.response) {
                classN = 'questionStatusAttempted';
            } else {
                classN = '';
            }
            selectors.push(<div key={q.questionNo} className={`mx-4 classN questionStatus text-center ${classN}`}>{q.questionNo}</div>);
        }
        return selectors;
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
                    {this.renderQuestionSelector()}
                </div>
            </Container>
        );
    }
}

export default Quiz;
