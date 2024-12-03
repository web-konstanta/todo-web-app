import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Auth.module.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
	return (
		<form className={classes.authForm}>
			<div className={classes.authFormItem}>
				<Input type="text" placeholder="Enter your name" styles={{ width: '100%', padding: '10px' }} />
			</div>
			<div className={classes.authFormItem}>
				<Input type="email" placeholder="Enter your email address" styles={{ width: '100%', padding: '10px' }} />
			</div>
			<div className={classes.authFormItem}>
				<Input type="password" placeholder="Enter your password" styles={{ width: '100%', padding: '10px' }} />
			</div>
			<Button
				type="submit"
				btnClassName="createTask"
				styles={{ width: '423px', padding: '10px' }}
			>
				Sign up
			</Button>
			<div className={classes.authRedirect}>You have an account? <Link to="/sign-in">Sign in here!</Link></div>
		</form>
	);
};

export default SignUpForm;