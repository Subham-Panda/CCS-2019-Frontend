import React from 'react';

import { Col, Button } from 'react-bootstrap';

import '../css/HomeIllustration.css';

class HomeIllustration extends React.Component {
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
                variant='light'>
                    {this.props.domain}
                </Button>
            </Col>
        );
    }
}

export default HomeIllustration;
