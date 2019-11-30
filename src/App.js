import React from 'react';
// import API from './API';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import CCSNavbar from './components/CCSNavbar';
import CCSFooter from './components/CCSFooter';
// import Home from './components/Home';
import Quiz from './components/Quiz';
import ComingSoon from './components/ComingSoon';

// Fonts
import './css/fonts.css';

// CSS
import './css/App.css';
class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='backgroundImage'></div>
				<Container fluid={true} className='rootContainer'>
					<Row className='navbarRow'>
						<CCSNavbar/>
					</Row>
					<Row className='homePageRow d-flex'>
						<Switch>
							<Route exact path='/' component={ComingSoon /*Home*/} />
							<Route path='/quiz' component={Quiz} />
          				</Switch>
					</Row>
					<Row className='footerRow'>
						<CCSFooter />
					</Row>
				</Container>
			</Router>
		);
	}
}

export default App;
