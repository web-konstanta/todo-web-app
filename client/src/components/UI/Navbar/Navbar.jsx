import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.menu}>
			<ul>
				<div className={classes.menuGroup}>
					<div className={classes.menuItem}>
						<li><a href="#home">Главная</a></li>
					</div>
					<div className={classes.menuItem}>
						<li><a href="#contact">Выйти</a></li>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;