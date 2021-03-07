import React from 'react';
import {Router,Link} from 'react-router-dom'
import "./App.css";

function App() {
  return (
		<div className='App'>
			<img src='' alt='Josmar Morales' />
			<nav className='navbar'>
				<Link to=''>Tips & Tricks</Link>
				<Link to=''>Project Week</Link>
				<Link to=''>About Me</Link>
				<Link to=''>Random Jokes</Link>
			</nav>
		</div>
	);
}

export default App;
