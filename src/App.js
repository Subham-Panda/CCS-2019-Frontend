import React from 'react';
// import API from './API';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

// Components
import CCSNavbar from './components/CCSNavbar'
import CCSFooter from './components/CCSFooter'
import Home from './components/Home'

// CSS
import './css/App.css';

class App extends React.Component {

	render() {
		return (
			<Container fluid={true} className='rootContainer'>
				<Row className='navbarRow'>
					<CCSNavbar/>
				</Row>
				<Row className='homePageRow d-flex'>
					<Home />
				</Row>
				<Row className='footerRow'>
					<CCSFooter />
				</Row>
			</Container>
		);
	}
}

export default App;
