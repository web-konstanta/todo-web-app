import React from 'react';
import classes from '../../styles/modules/Auth.module.css';
import SignInForm from '../../components/Auth/SignInForm';

const SignIn = () => {
	return (
		<div className={classes.wrapper}>
			<SignInForm />
		</div>
	);
};

export default SignIn;