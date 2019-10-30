import React from 'react';

import { Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

import '../css/HomeIllustration.css';

class HomeIllustration extends React.Component {
    state = {
        domain: false,
    }

    handleStartQuiz = (selectedDomain) => {
        this.setState(() => ({
            domain: selectedDomain,
        }));
    }

    render () {
        console.log(this.state);
        if (this.state.domain === true) {
            return <Redirect to='/dashboard' />
        }

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
                onClick={ () => { this.handleStartQuiz(this.props.domain) } }>
                    {this.props.domain}
                </Button>
            </Col>
        );
    }
}

export default HomeIllustration;
