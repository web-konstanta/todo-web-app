import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar';
import { useFilteredTodos } from '../../hooks/useTodo';
import TodoOptions from '../../components/Todo/TodoOptions';
import axiosInstance from '../../axiosConfig'
import Loader from '../../components/UI/Loader/Loader';
import { useFetch } from '../../hooks/useFetching';
import todoService from '../../services/todoService';

const Index = () => {
	const [todos, setTodos] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const [fetchPosts, isLoading, error] = useFetch(async () => {
		const response = await axiosInstance.get('/todo')
		setTodos([...response.data?.data])
	})

	useEffect(() => {
		fetchPosts()
	}, [])

	const removeTodo = async id => {
		try {
			await todoService.delete(id)
			setTodos([...todos].filter(todo => todo.id !== id))
		} catch (e) {
			console.log(e)
		}
	}

	const filteredPosts = useFilteredTodos(todos, filter.sort, filter.query)

	return (
		<div>
			<Navbar />
			<TodoOptions filter={filter} setFilter={setFilter} />
			{error
				? <h1 style={{ textAlign: 'center', color: 'red', marginTop: '6%' }}>{error}</h1>
				: isLoading ? <Loader /> : <TodoList todos={filteredPosts} remove={removeTodo} />
			}
		</div>
	);
};

export default Index;