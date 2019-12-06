import React from 'react';

import { Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import '../css/HomeIllustration.css';
import Instructions from './Instructions';

class HomeIllustration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: null,
            showModal: false,
        }
    }

    setModalShow = (val) => {
        this.setState(() => ({
            domain: null,
            showModal: val,
        }))
    }

    renderButton = () => {
        if (this.props.classes === 'ended') {
            return <Button
                className='domainButton text-uppercase py-4'
                size='lg'
                variant='light'
                disabled
                onClick={() => { this.handleStartQuiz(this.props.domain) }}>
                {this.props.domain}
            </Button>;
        } else {
            return <Button
                className='domainButton text-uppercase py-4'
                size='lg'
                variant='light'
                onClick={() => { this.handleStartQuiz(this.props.domain) }}>
                {this.props.domain}
            </Button>
        }
    }

    handleStartQuiz = async (selectedDomain) => {
        await this.setState(() => ({
            domain: selectedDomain,
            showModal: true,
        }));
    }

    render() {
        return (
            <Col md='3'
                className={`illustrationContainer ${this.props.classes}`}
            >
                <img
                    src={this.props.imgSrc}
                    alt={this.props.domain}
                    className={`homeIllustration ${this.props.domain}Illustration`}
                    onClick={() => { this.handleStartQuiz(this.props.domain) }}
                />

                {this.renderButton()}

                <Instructions
                    show={this.state.showModal}
                    onHide={() => this.setModalShow(false)}
                    continue={() => this.props.history.push(`/quiz/${this.props.domain}`)}
                />
            </Col>
        );
    }
}

export default withRouter(HomeIllustration);
