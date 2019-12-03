import React from 'react';
import API from './API';

import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			user: undefined,
		}
	}

	isLoggedIn = () => {
		const token = localStorage.getItem('token');
		if (token) {
			API.get(`https://accounts.csivit.com/user?token=${token}`)
			.then((response) => {
				if (!response.data.success) {
					this.logout();
				} else {
					this.setState(() => ({
						loggedIn: true,
						user: response.data.user,
					}));
				}
			}).catch((err) => {
				console.log(`Error: ${err}`);
			});
		} else {
			this.setState(() => ({
				loggedIn: false,
				user: undefined,
			}));
		}
	}

	logout = () => {
		localStorage.removeItem('token');
		this.setState(() => ({
			loggedIn: false,
			user: undefined
		}))
	}

	renderHome = () => {
		// if (this.state.loggedIn && this.state.user) {
			// return <Home {...this.state}/>;
		// } else {
			return <ComingSoon {...this.state}/>;
		// }
	}

	componentDidMount() {
		this.isLoggedIn();
	}

	// TODO: disable some routes on Logged in

	render() {
		return (
			<Router>
				<div className='backgroundImage'></div>
				<Container fluid={true} className='rootContainer'>
					<Row className='navbarRow'>
						<CCSNavbar {...this.state}/>
					</Row>
					<Row className='homePageRow d-flex'>
						<Switch>
							<Route exact path='/' render={() => this.renderHome()} />

							{/* <Route path='/quiz' render={() => <Quiz {...this.state}/>} /> */}
							
							<Route path='/register' component={() => {
								window.location.href="https://accounts.csivit.com/oauth/authorize?clientId=294A404E635266556A586E327234753778214125442A472D4B6150645367566B&state=2jen9jfnvjn0nv1e&redirectUrl=https%3A%2F%2Fccs.csivit.com%2Foauth%2Ftoken";
								return null;
							}} />

							<Route path='/oauth/token' component={({match, location}) => {
								const token = queryString.parse(location.search).token;
								localStorage.setItem('token', token);
								return <Redirect to='/'/>
							}} />

							<Route path='/logout' component={() => {
								this.logout();
								return <Redirect to='/'/>;
							}} />

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
