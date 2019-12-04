import React from 'react';
import {API, setAuthToken} from './API';
import shortid from 'shortid';

import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import CCSNavbar from './components/CCSNavbar';
import CCSFooter from './components/CCSFooter';
// import Home from './components/Home';
// import Quiz from './components/Quiz';
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
			invalidUser: false
		}
	}

	isLoggedIn = () => {
		const token = localStorage.getItem('token');
		setAuthToken(token);
		if (token) {
			API.get(`${process.env.REACT_APP_ACCOUNTS_URL}/user`)
			.then((response) => {
				if (!response.data.success) {
					this.logout();
				} else {
					const user = response.data.user;
					console.log(user);
					if (user.regNo.startsWith('19') || (user.scope.indexOf('csi') > -1)) {
						this.setState(() => ({
							loggedIn: true,
							user: user,
							invalidUser: false
						}));
					} else {
						this.setState(() => ({
							loggedIn: false,
							user: undefined,
							invalidUser: true
						}));
						localStorage.removeItem('token');
					}
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
		// 	return <Home {...this.state}/>;
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
								const redirectUrl = encodeURIComponent(process.env.REACT_APP_REDIRECT_URL);
								const oauthState = encodeURIComponent(shortid.generate());
								localStorage.setItem('state', oauthState);
								window.location.href=`${process.env.REACT_APP_ACCOUNTS_URL}/oauth/authorize?clientId=${process.env.REACT_APP_CLIENT_ID}&state=${oauthState}&redirectUrl=${redirectUrl}`;
								return null;
							}} />

							<Route path='/oauth/token' component={({match, location}) => {
								const token = queryString.parse(location.search).token;
								const state = queryString.parse(location.search).state;
								
								// Only accept token if state matches
								if (state === localStorage.getItem('state')) {
									localStorage.setItem('token', token);
									localStorage.removeItem('state');
								}
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
