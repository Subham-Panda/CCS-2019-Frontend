import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';

import '../css/CCSNavbar.css'

class CCSNavbar extends React.Component {
    showLogoutButton = () => {
        if (this.props.loggedIn) {
            return (
                <Dropdown>
                <Dropdown.Toggle variant="light" className='mr-2 ml-5 dropdownLink'>
                    {this.props.user.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            );
        } else {
            return <Button variant='light ml-5 mr-2' onClick={() => {window.location.href='/login'}}>LOGIN</Button>;
        }
    }
    render() {
        return (
            <Navbar className='navbar p-2' fixed='top' expand='lg' variant='dark'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/' className='navbar-link ml-5' active>HOME</Nav.Link>
                        <Nav.Link href='https://csivit.com#events' target='_blank' rel='noopener noreferrer' className='navbar-link ml-5' active>EVENTS</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="https://discord.gg/yVNt7Jd" target="_blank" className='navbar-link ml-5' active>
                            Join our Discord!
                            <FontAwesomeIcon className="ml-2 discordLink" icon={faDiscord} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {this.showLogoutButton()}
            </Navbar>
        )
    }
}

export default CCSNavbar;
