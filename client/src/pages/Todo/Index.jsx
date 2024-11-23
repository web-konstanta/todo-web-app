import React, { useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { useFilteredTodos } from '../../hooks/useTodo';
import classes from '../../styles/modules/Todo.module.css';

const Index = () => {
	const [todos] = useState([
		{ id: 1, title: 'First mock task', status: 'Complete' },
		{ id: 2, title: 'Second mock task', status: 'In progress' },
		{ id: 3, title: 'Third mock task', status: 'Todo' },
	])
	const [filter, setFilter] = useState({ query: '' })

	const filteredPosts = useFilteredTodos(todos, filter.query)

	return (
		<div>
			<Navbar />
			<div className={classes.wrapper}>
				<Input
					type="text"
					placeholder="Search todo..."
					onChange={e => setFilter({ ...filter, query: e.target.value })}
				/>
				<Button btnClassName="addTask">Add Task</Button>
			</div>
			<TodoList todos={filteredPosts} />
		</div>
	);
};

export default Index;