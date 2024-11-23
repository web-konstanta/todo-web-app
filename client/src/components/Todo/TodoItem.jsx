import React from 'react';
import Button from '../UI/Button/Button';

const TodoItem = ({ todo }) => {
	return (
		<tr>
			<th scope="row">{todo.id}</th>
			<td>{todo.title}</td>
			<td>{todo.status}</td>
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