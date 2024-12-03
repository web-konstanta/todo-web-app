import React from 'react';
import SignUpForm from '../../components/Auth/SignUpForm';
import classes from '../../styles/modules/Auth.module.css';

const SignUp = () => {
	return (
		<div className={classes.wrapper}>
			<SignUpForm />
		</div>
	);
};

export default SignUp;