import React, { useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Navbar from '../../components/UI/Navbar/Navbar'

const Index = () => {
	const [todos] = useState([
		{ id: 1, title: 'First mock task', status: 'Complete' },
		{ id: 2, title: 'Second mock task', status: 'In progress' },
		{ id: 3, title: 'First mock task', status: 'Todo' },
	])

	return (
		<div>
			<Navbar />
			<TodoList todos={todos} />
		</div>
	);
};

export default Index;