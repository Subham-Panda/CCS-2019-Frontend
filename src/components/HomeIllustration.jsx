import React from 'react';

import { Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import '../css/HomeIllustration.css';

class HomeIllustration extends React.Component {
    state = {
        domain: false,
    }

    handleStartQuiz = async (selectedDomain) => {
        await this.setState(() => ({
            domain: selectedDomain,
        }));
        this.props.history.push('/quiz');
    }

    render () {
        return (
            <Col md='3'
            className='illustrationContainer'
            >
                <img
                    src={this.props.imgSrc}
                    alt={this.props.domain}
                    className={`homeIllustration ${this.props.domain}Illustration`}
                />

                <Button
                className='domainButton text-uppercase py-4'
                size='lg'
                variant='light'
                onClick={() => {this.handleStartQuiz(this.props.domain)}}>
                    {this.props.domain}
                </Button>
            </Col>
        );
    }
}

export default withRouter(HomeIllustration);
