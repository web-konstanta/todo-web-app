import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Auth.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authService from '../../services/authService';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useFetch } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';

const schema = yup.object({
	name: yup.string().required('Name field is required'),
	email: yup.string().email('Invalid email format').required('Email field is required'),
	password: yup.string().min(4, 'Password must be at least 4 characters long').required('Password is required'),
})

const SignUpForm = () => {
	const inputStyles = { width: '100%', padding: '10px' }
	const { setIsAuth } = useContext(AuthContext)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})

	const [signUp, isLoading, error] = useFetch(async data => await authService.signUp(data, setIsAuth))

	return (
		<form className={classes.authForm} onSubmit={handleSubmit(signUp)}>
			<div className={classes.authFormItem}>
				<Input
					type="text"
					placeholder="Enter your name"
					styles={inputStyles}
					{...register('name')}
				/>
				{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
			</div>

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
				Sign up
			</Button>
			{isLoading && <Loader />}
			{error && <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>}
			<div className={classes.authRedirect}>
				You have an account? <Link to="/sign-in">Sign in here!</Link>
			</div>
		</form>
	);
};

export default SignUpForm;