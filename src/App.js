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
import Home from './components/Home';
import Quiz from './components/Quiz';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading';

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
			invalidUser: false,
			isLoading: true,
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
					if (user.regNo.startsWith('19') || (user.scope.indexOf('csi') > -1)) {
						this.setState(() => ({
							loggedIn: true,
							user: user,
							invalidUser: false,
							isLoading: false,
						}));
					} else {
						this.setState(() => ({
							loggedIn: false,
							user: undefined,
							invalidUser: true,
							isLoading: false,
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
				isLoading: false,
			}));
		}
	}

	logout = () => {
		localStorage.removeItem('token');
		this.setState(() => ({
			loggedIn: false,
			user: undefined
		}));
	}

	renderHome = () => {
		if (this.state.loggedIn && this.state.user.scope.indexOf('csi') >= 0) {
			return <Home {...this.state}/>;
		} else {
			return <ComingSoon {...this.state}/>;
		}
	}

	componentDidMount() {
		this.isLoggedIn();
	}

	renderProtectedRoutes = () => {
		if (this.state.loggedIn && this.state.user.scope.indexOf('csi') >= 0)
			return <Route path='/quiz/:domain' component={({match, location}) => {
				return <Quiz domain={match.params.domain} {...this.state}/>;
			}} />
	}

	render() {
		if(this.state.isLoading) {
			return (
				<>
				<div className='backgroundImage'></div>
				<Container fluid={true} className='rootContainer'>
					<Row className='navbarRow'>
						<CCSNavbar {...this.state}/>
					</Row>
					<Row className='homePageRow d-flex'>
					<Loading />
					</Row>
					<Row className='footerRow'>
						<CCSFooter />
					</Row>
				</Container>
				</>
			);
		}
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

							{this.renderProtectedRoutes()}

							<Route path='/login' component={() => {
								const redirectUrl = encodeURIComponent(process.env.REACT_APP_REDIRECT_URL);
								const oauthState = encodeURIComponent(shortid.generate());
								localStorage.setItem('state', oauthState);
								window.location.href=`${process.env.REACT_APP_ACCOUNTS_URL}/oauth/authorize?clientId=${process.env.REACT_APP_CLIENT_ID}&state=${oauthState}&redirectUrl=${redirectUrl}`;
								return null;
							}} />

							<Route path='/oauth/token' component={({match, location}) => {
								const search = queryString.parse(location.search);
								const token = search.token;
								const state = search.state;
								
								// Only accept token if state matches
								if (state === localStorage.getItem('state')) {
									localStorage.setItem('token', token);
									localStorage.removeItem('state');
								}
								this.isLoggedIn();
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
