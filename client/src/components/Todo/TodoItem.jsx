import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { formatDate } from '../../common/utils';
import { statusClasses } from '../../common/constants';

const TodoItem = ({ todo, remove, statusNames }) => {
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