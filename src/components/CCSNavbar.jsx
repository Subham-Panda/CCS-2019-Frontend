import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

import '../css/CCSNavbar.css'

class CCSNavbar extends React.Component {
    render() {
        return (
            <Navbar className='navbar p-2' fixed='top' expand='lg' variant='dark'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#home' className='navbar-link ml-5' active>HOME</Nav.Link>
                        <Nav.Link href='https://csivit.com#events' target='_blank' rel='noopener noreferrer' className='navbar-link ml-5'>EVENTS</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="https://discord.gg/yVNt7Jd" target="_blank" className='navbar-link ml-5' active>
                            Join our Discord!
                            <FontAwesomeIcon className="ml-2 discordLink" icon={faDiscord} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CCSNavbar;
