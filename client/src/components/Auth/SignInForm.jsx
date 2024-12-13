import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Auth.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import authService from '../../services/authService';
import { AuthContext } from '../../context/authContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	email: yup.string().email('Invalid email format').required('Email field is required'),
	password: yup.string().min(4, 'Password must be at least 4 characters long').required('Password is required'),
})

const SignInForm = () => {
	const inputStyles = { width: '100%', padding: '10px' }
	const { setIsAuth } = useContext(AuthContext)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
	})

	const signIn = async data => {
		const response = await authService.signIn(data)
		if (response) setIsAuth(true)
	}

	return (
		<form className={classes.authForm} onSubmit={handleSubmit(signIn)}>
			<div className={classes.authFormItem}>
				<Input
					type="email"
					placeholder="Enter your email address"
					styles={inputStyles}
					{...register('email')}
				/>
				{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
			</div>

			<div className={classes.authFormItem}>
				<Input
					type="password"
					placeholder="Enter your password"
					styles={inputStyles}
					{...register('password')}
				/>
				{errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
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