import React from 'react';
import API from './API';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

	doSomething = () => {
		API.get('/')
			.then(res => { })
			.catch(err => { });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Dunno. Do some shit. </p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
				</a>
				</header>
			</div>
		);
	}
}

export default App;
