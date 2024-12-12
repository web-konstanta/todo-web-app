import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Auth.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import authService from '../../services/authService';
import { AuthContext } from '../../context/authContext';

const SignInForm = () => {
	const { setIsAuth } = useContext(AuthContext)
	const [user, setUser] = useState({ email: '', password: '' })

	const signIn = async e => {
		e.preventDefault()
		if (await authService.signIn(user)) setIsAuth(true)
	}

	return (
		<form className={classes.authForm} onSubmit={signIn}>
			<div className={classes.authFormItem}>
				<Input
					type="email"
					placeholder="Enter your email address"
					styles={{ width: '100%', padding: '10px' }}
					onChange={e => setUser({ ...user, email: e.target.value })}
				/>
			</div>
			<div className={classes.authFormItem}>
				<Input
					type="password"
					placeholder="Enter your password"
					styles={{ width: '100%', padding: '10px' }}
					onChange={e => setUser({ ...user, password: e.target.value })}
				/>
			</div>
			<Button
				type="submit"
				btnClassName="createTask"
				styles={{ width: '423px', padding: '10px' }}
			>
				Sign in
			</Button>
			<div className={classes.authRedirect}>You don`t` have an account? <Link to="/sign-up">Sign up here!</Link></div>
		</form>
	);
};

export default SignInForm;