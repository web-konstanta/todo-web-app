import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import todoService from '../../services/todoService';
import { useFetch } from '../../hooks/useFetching';
import { formatDate } from '../common/utils';
import { statusClasses } from '../common/constants';

const TodoItem = ({ todo, remove }) => {
	const [statusNames, setStatusNames] = useState([])

	const [fetchStatusNames, isLoading, error] = useFetch(async () => {
		let statuses = await todoService.todoStatuses()
		setStatusNames([...statuses.map(status => status.name)])
	})

	useEffect(() => {
		fetchStatusNames()
	}, [])

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