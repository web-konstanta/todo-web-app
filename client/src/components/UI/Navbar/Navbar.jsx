import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionSetIsAuth } from '../../../store/reducers/authReducer';

const Navbar = () => {
	const dispatch = useDispatch();

	const logout = () => {
		localStorage.removeItem('accessToken')
		dispatch(actionSetIsAuth(false))
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