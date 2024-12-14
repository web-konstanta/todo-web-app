import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import todoService from '../../services/todoService';
import { useFetch } from '../../hooks/useFetching';

const TodoItem = ({ todo, remove }) => {
	const statusClasses = {
		1: 'taskTodo',
		2: 'taskInProgress',
		3: 'taskComplete'
	}
	const [statusNames, setStatusNames] = useState([])

	const [fetchStatusNames, isLoading, error] = useFetch(async () => {
		let statuses = await todoService.todoStatuses()
		setStatusNames([...statuses.map(status => status.name)])
	})

	useEffect(() => {
		fetchStatusNames()
	}, [])


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
				<Button btnClassName={statusClasses[todo.statusId]}>{statusNames[todo.statusId - 1]}</Button>
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