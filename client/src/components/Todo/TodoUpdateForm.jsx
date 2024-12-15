import React, { useEffect, useRef, useState } from 'react';
import classes from '../../styles/modules/Todo.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetching';
import axiosInstance from '../../axiosConfig';
import Select from '../UI/Select/Select';
import todoService from '../../services/todoService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	title: yup.string().required('Title field is required'),
	description: yup.string().required('Description field is required'),
	statusId: yup.number().required('Status id field is required')
})

const TodoUpdateForm = () => {
	const { id } = useParams()
	const [todo, setTodo] = useState({})
	const [todoStatuses, setTodoStatuses] = useState([])

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title: '',
			description: '',
			statusId: null
		}
	})

	const [fetchTodoStatuses, isStatusesLoading, statusesError] = useFetch(async () => {
		const data = await todoService.todoStatuses()
		setTodoStatuses([...data])
	})

	const [fetchTodo, isLoading, error] = useFetch(async () => {
		const response = await axiosInstance.get(`/todo/${id}`)
		setTodo(response.data?.data)
	})

	useEffect(() => {
		if (todo) {
			reset({
				title: todo.title,
				description: todo.description,
				statusId: todo.statusId
			})
		}
	}, [todo, reset])

	useEffect(() => {
		fetchTodo()
		fetchTodoStatuses()
	}, [])

	const updateTodo = async data => await todoService.update(id, data)

	return (
		<div className={classes.wrapper}>
			<form className={classes.todoForm} onSubmit={handleSubmit(updateTodo)}>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						styles={{ width: '378px', padding: '10px' }}
						{...register('title')}
					/>
					{errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
				</div>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						styles={{ width: '378px', padding: '10px' }}
						{...register('description')}
					/>
					{errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
				</div>
				<div className={classes.todoFormItem}>
					<Select
						defaultOption="Select todo status"
						options={todoStatuses}
						statusId={todo.statusId}
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
					Update task
				</Button>
			</form>
		</div>
	);
};

export default TodoUpdateForm;