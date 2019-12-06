import React from 'react';

import { Row, Container } from 'react-bootstrap';

import '../css/CCSFooter.css'

// Images
import facebookLogo from '../images/facebook-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import instagramLogo from '../images/instagram-logo.png';
import csivitu from '../images/@csivitu.png';

class CCSFooter extends React.Component {
    render () {
        return (
            <Row className='footer p-3 navbar-static-bottom m-auto'>
                <Container className='text-center text-md-left footer-content'>
                    <Row className='d-flex justify-content-around'>
                        <a
                            href='https://www.facebook.com/csivitu'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={facebookLogo} className='footer-img' alt='facebook'/>
                        </a>
                        <a
                            href='https://twitter.com/csivitu'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={twitterLogo} className='footer-img' alt='twitter'/>
                        </a>
                        <a
                            href='https://www.instagram.com/csivitu/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={instagramLogo} className='footer-img' alt='instagram'/>
                        </a>
                        <a
                            href='https://csivit.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={csivitu} className='footer-img' alt='csivit'/>
                        </a>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default CCSFooter;
