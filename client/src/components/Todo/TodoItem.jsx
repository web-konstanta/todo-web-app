import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, remove }) => {
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
				<Link to={`/todo/update/${todo.id}`}>
					<Button btnClassName="editTask">
						Edit
					</Button>
				</Link>
			</td>
			<td>
				<Button
					btnClassName="removeTask"
					onClick={() => remove(todo.id)}
				>
					Remove
				</Button>
			</td>
		</tr>
	);
};

export default TodoItem;