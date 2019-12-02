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

import API from './API';

class App extends React.Component {
	API.get('/oauth/authorize?clientId=294A404E635266556A586E327234753778214125442A472D4B6150645367566B&state=2jen9jfnvjn0nv1e&redirectUrl=http%3A%2F%2Flocalhost:3000%2Foauth%2Ftoken')
	.then(function (response) {
	  console.log('response:'+response);
	})
	.catch(function (error) {
	  console.log('eror:'+error);
	});

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
							<Route path='/register' component={() => {
								window.location.href="https://accounts.csivit.com/oauth/authorize?clientId=294A404E635266556A586E327234753778214125442A472D4B6150645367566B&state=2jen9jfnvjn0nv1e&redirectUrl=http%3A%2F%2Flocalhost:3000%2Foauth%2Ftoken";
							}}></Route>
							<Route path='/oauth/token' component={() => {
								window.location.href="/";
							}}></Route>
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
