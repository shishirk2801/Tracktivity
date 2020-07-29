import React from 'react';
import Navstyle from './Navbar.module.css';
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark" style={{ width: '100%' }}>
			<a className={Navstyle.brand} href="/">
				Tractivity
			</a>
		</nav>
	);
};
export default Navbar;
