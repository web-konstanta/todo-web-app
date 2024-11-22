import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.menu}>
			<ul>
				<div>
					<li><a href="#home">Главная</a></li>
				</div>
				<div>
					<li><a href="#contact">Выйти</a></li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;