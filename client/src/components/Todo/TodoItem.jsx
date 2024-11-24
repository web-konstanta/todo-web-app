import React from 'react';
import Button from '../UI/Button/Button';

const TodoItem = ({ todo }) => {
	const statusClasses = {
		complete: 'taskComplete',
		'in progress': 'taskInProgress',
		todo: 'taskTodo'
	}

	return (
		<tr>
			<th scope="row">{todo.id}</th>
			<td>{todo.title}</td>
			<td>
				<Button btnClassName={statusClasses[todo.status.toLowerCase()]}>{todo.status}</Button>
			</td>
			<td>{todo.createdAt}</td>
			<td>
				<Button btnClassName="editTask">Edit</Button>
			</td>
			<td>
				<Button btnClassName="removeTask">Remove</Button>
			</td>
		</tr>
	);
};

export default TodoItem;