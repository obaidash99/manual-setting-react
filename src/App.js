import React from 'react';
import 'App.css';
import okk from './000.png';
import Nav from './Nav';

const App = () => (
	<div className="className">
		<Nav />
		<h1 className="wow">Hello React!</h1>
		<img src={okk} alt="" />
	</div>
);

export default App;
