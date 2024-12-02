import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={classes.menu}>
			<ul>
				<div className={classes.menuGroup}>
					<div className={classes.menuItem}>
						<li>
							<Link to="/todo">Main</Link>
						</li>
					</div>
					<div className={classes.menuItem}>
						<li><a href="#contact">Log out</a></li>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;