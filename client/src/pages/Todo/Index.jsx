import React, { useContext, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar';
import { useFilteredTodos } from '../../hooks/useTodo';
import TodoOptions from '../../components/Todo/TodoOptions';
import { AuthContext } from '../../context/authContext';

const Index = () => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'First mock todo', status: 'Complete', createdAt: '23.11.2024' },
		{ id: 2, title: 'Second mock todo', status: 'In progress', createdAt: '20.11.2024' },
		{ id: 3, title: 'Third mock todo', status: 'Todo', createdAt: '19.11.2024' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })

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