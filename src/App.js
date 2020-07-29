import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UserContainer from './Container/UserConatiner/UserConatiner';

function App() {
	return (
		<div className="App">
			<Header />
			<br />
			<UserContainer />
		</div>
	);
}

export default App;
