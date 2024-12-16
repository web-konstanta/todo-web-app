import React, { useEffect, useState } from 'react';
import classes from '../../styles/modules/Todo.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import todoService from '../../services/todoService';
import Select from '../UI/Select/Select';
import { useFetch } from '../../hooks/useFetching';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
	title: yup.string().required('Title field is required'),
	description: yup.string().required('Description field is required'),
	statusId: yup.number().required('Status id field is required')
})

const TodoCreateForm = () => {
	const [todoStatuses, setTodoStatuses] = useState([])
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
	})

	const [fetchTodoStatuses, isLoading, error] = useFetch(async () => {
		const data = await todoService.todoStatuses()
		setTodoStatuses([...data])
	})

	useEffect(() => {
		fetchTodoStatuses()
	}, [])

	const createTodo = async data => {
		const status = await todoService.create(data)
		if (status === 201) navigate('/todo')
	}

	return (
		<div className={classes.wrapper}>
			<form className={classes.todoForm} onSubmit={handleSubmit(createTodo)}>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						placeholder="Enter task title"
						styles={{ width: '378px', padding: '10px' }}
						{...register('title')}
					/>
					{errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
				</div>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						placeholder="Enter task description"
						styles={{ width: '378px', padding: '10px' }}
						{...register('description')}
					/>
					{errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
				</div>
				<div className={classes.todoFormItem}>
					<Select
						defaultOption="Select todo status"
						options={todoStatuses}
						style={{ width: '400px', padding: '10px' }}
						{...register('statusId')}
					/>
				</div>
				{errors.statusId && <p style={{ color: 'red' }}>{errors.statusId.message}</p>}
				<Button
					type="submit"
					btnClassName="createTask"
					styles={{ width: '400px', padding: '10px' }}
				>
					Create task
				</Button>
			</form>
		</div>
	);
};

export default TodoCreateForm;