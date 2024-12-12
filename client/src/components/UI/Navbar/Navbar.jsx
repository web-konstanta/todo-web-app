import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext)

	const logout = () => {
		localStorage.removeItem('accessToken')
		setIsAuth(false)
	}

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
						<li>
							<a onClick={logout} style={{ cursor: 'pointer' }}>Log out</a>
						</li>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;