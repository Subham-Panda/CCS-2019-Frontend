import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Card, Button } from 'react-bootstrap';
import API from '../API';

import '../css/Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import EndConfirmation from './EndConfirmation';
import End from './End';
import DomainInProgress from './DomainInProgress';
import Loading from './Loading';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: undefined,
            timeStarted: undefined,
            timeEnded: undefined,
            currentQuestion: 1,
            answer: '',
            savedStatus: true,
            isLoading: true,
            timeRemaining: undefined,
            errorMsg: undefined,
            domainInProg: undefined,
        }

        this.timer = null;

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    renderQuestion = () => {
        if (this.state.questions) {
            return this.state.questions[this.state.currentQuestion - 1].question;
        } else {
            return <i>Loading question...</i>;
        }
    }

    handleNext = () => {
        this.updateQuestionState(this.state.currentQuestion + 1);
    }

    hideNext = () => {
        if (this.state.currentQuestion === 10) {
            return 'd-none';
        }
    }

    handlePrevious = () => {
        this.updateQuestionState(this.state.currentQuestion - 1);
    }

    hidePrevious = () => {
        if (this.state.currentQuestion === 1) {
            return 'd-none';
        }
    }

    updateQuestionState = (currentQuestion) => {
        if (currentQuestion < 1 || currentQuestion > 10) return;
        
        if (!this.state.questions) return;
        let initialContent = this.state.questions[currentQuestion - 1].response;

        if (initialContent) this.setState({answer: initialContent, currentQuestion: currentQuestion});
        else this.setState({answer: '', currentQuestion: currentQuestion});
    }

    renderSavedStatus = () => {
        if (this.state.savedStatus) {
            return <small className='text-success font-italic mr-1'>All changes saved.</small>;
        } else return <small className='text-danger font-italic mr-1'>Saving...</small>;
    }

    handleChange = async (e) => {
        await this.setState({answer: e.target.value});
        this.handleAnswer();
    }

    handleAnswer = () => {
        if(!this.state.questions) return;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.saveAnswers();
        }, 2000);
        
        this.setState({savedStatus: false});
        let ques = this.state.questions[this.state.currentQuestion - 1];
        ques.response = this.state.answer;
        this.forceUpdate();
    }

    saveAnswers = () => {
        API.post('/quiz/respond', {responses: this.state.questions, domain: this.props.domain})
        .then((res) => {
            if (!res.data.success) return;
            this.setState({savedStatus: true});
        });
    }

    setModalShow = (val) => {
        this.setState(() => ({
            showModal: val,
        }));
    }

    pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    componentDidMount() {
        API.post('/quiz/start', {domain: this.props.domain})
        .then((response) => {
            if (!response.data.success) {
                this.setState({
                    errorMsg: response.data.message,
                    domainInProg: response.data.domain,
                    isLoading: false,
                });
            } else {
                const timeStarted = new Date(response.data.time.timeStarted).getTime(); 
                const timeEnded = new Date(response.data.time.timeEnded).getTime();
                const timeRemaining = timeEnded - Date.now();
                this.timer = setInterval(()=> {
                    this.setState(() => {
                        let t = this.state.timeRemaining - 500;
                        if (t < 0) {t = 0};
                        return {timeRemaining: t};
                    });
                }, 500);
                this.setState(() => ({
                    questions: response.data.responses,
                    timeStarted: timeStarted,
                    timeEnded: timeEnded,
                    isLoading: false,
                    timeRemaining: timeRemaining,
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
            selectors.push(<div key={q.questionNo} onClick={() => {this.updateQuestionState(i+1)}} className={`mx-4 classN questionStatus text-center ${classN}`}>{i+1}</div>);
        }
        return selectors;
    }

    renderTime() {
        let timeRemaining = this.state.timeRemaining;
        const minutes = this.pad(Math.floor(timeRemaining/(60*1000)), 2);
         timeRemaining -= (minutes * (60*1000));
         const seconds = this.pad(Math.floor(timeRemaining/(1000)), 2);
         return `${minutes}:${seconds}`;
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading />
            );
        }
        if (this.state.errorMsg === 'anotherDomainInProgress') {
            return <DomainInProgress domain={this.state.domainInProg}/>;
        } else if (this.state.errorMsg === 'quizAlreadyAttempted') {
            return <End domain={this.props.domain}/>;
        }
        return (
            <Container fluid='true' className='d-flex flex-column justify-content-center quizContainer'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='domainName mb-2'>Domain: <span className='domainProp'>{this.props.domain}</span></div>
                        <div className='quizTimer pr-4'>
                            <FontAwesomeIcon icon={faClock} /> {this.renderTime()}
                            </div>
                    </div>
                    <Card className='quizCard questionCard py-3 my-2 px-2'>
                        <Card.Title className='questionNo pl-3'>Question {this.state.currentQuestion})</Card.Title>
                        <Card.Body className='questionCardBody py-0'>
                            <Card.Text>
                                {this.renderQuestion()}
                                {/* <SyntaxHighlighter language="javascript" style={docco}>
                                    {`helloworld=() => {
    loasf
}`}
                                </SyntaxHighlighter> */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <div className='py-2'>
                        <Card className='quizCard answerCard'>
                        <Card.Body>
                            <textarea placeholder='Your answer here.' className='answerText p-2' value={this.state.answer} onChange={(value) => this.handleChange(value)}/>
                            <div className='text-right savedStatus p-1'>{this.renderSavedStatus()}</div>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='buttonContainer mt-1 d-flex px-4 justify-content-between'>
                        <div>
                        <Button className={`text-uppercase ${this.hidePrevious()}`} onClick={this.handlePrevious}>Previous</Button>
                        </div>
                        <div>
                            <Button className={`text-uppercase ${this.hideNext()}`} onClick={this.handleNext}>Next</Button>
                            <Button className='text-uppercase submitButton ml-4' onClick={() => this.setModalShow(true)}>End Quiz</Button>
                        </div>
                    </div>
                </div>
                <div className='questionStatusContainer mx-auto mt-4'>
                    {this.renderQuestionSelector()}
                </div>

                <EndConfirmation
                    show={this.state.showModal}
                    onHide={() => this.setModalShow(false)}
                    continue={() => {
                        API.post('/quiz/end', {domain: this.props.domain})
                        .then((response) => {
                            this.setState({
                                errorMsg: 'quizAlreadyAttempted',
                            })
                        });
                    }}
                />
            </Container>
        );
    }
}

export default withRouter(Quiz);
