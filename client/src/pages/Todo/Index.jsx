import React, { useContext, useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar';
import { useFilteredTodos } from '../../hooks/useTodo';
import TodoOptions from '../../components/Todo/TodoOptions';
import axiosInstance from '../../axiosConfig'

const Index = () => {
	const [todos, setTodos] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const fetchPosts = async () => {
		try {
			const response = await axiosInstance.get('/todo')
			setTodos([...response.data?.data])
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		try {
			fetchPosts()
		} catch (e) {
			console.log(e)
		}
	}, [])

	const removeTodo = id => setTodos([...todos].filter(todo => todo.id !== id))

	const filteredPosts = useFilteredTodos(todos, filter.sort, filter.query)

	return (
		<div>
			<Navbar />
			<TodoOptions filter={filter} setFilter={setFilter} />
			<TodoList todos={filteredPosts} remove={removeTodo} />
		</div>
	);
};

export default Index;