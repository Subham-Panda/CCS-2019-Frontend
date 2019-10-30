import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import '../css/CCSNavbar.css'

class CCSNavbar extends React.Component {
    render () {
        return (
            <Navbar className='navbar p-2' fixed='top' expand='lg'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#home' className='navbar-link ml-5'>HOME</Nav.Link>
                        <Nav.Link href='#events' className='navbar-link ml-5'>EVENTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CCSNavbar;
