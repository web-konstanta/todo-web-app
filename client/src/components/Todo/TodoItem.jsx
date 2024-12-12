import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, remove }) => {
	const statusClasses = {
		1: 'taskTodo',
		2: 'taskInProgress',
		3: 'taskComplete'
	}
	const statusNames = {
		1: 'Todo',
		2: 'In Progress',
		3: 'Complete'
	}

	const formatDate = isoDate => {
		const date = new Date(isoDate)

		const day = date.getUTCDate().toString().padStart(2, '0')
		const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
		const year = date.getUTCFullYear()

		return `${day}-${month}-${year}`
	}

	return (
		<tr>
			<th scope="row">{todo.id}</th>
			<td>{todo.title}</td>
			<td>
				<Button btnClassName={statusClasses[todo.statusId]}>{statusNames[todo.statusId]}</Button>
			</td>
			<td>{formatDate(todo.createdAt)}</td>
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