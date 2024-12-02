import React from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import TodoCreateForm from '../../components/Todo/TodoCreateForm';

const Create = () => {
	return (
		<div>
			<Navbar />
			<TodoCreateForm />
		</div>
	);
};

export default Create;