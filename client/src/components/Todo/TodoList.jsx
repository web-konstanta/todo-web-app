import React, { useEffect, useState } from 'react';
import '../../styles/static/tables.css';
import classes from '../../styles/modules/Todo.module.css';
import TodoItem from './TodoItem';
import todoService from '../../services/todoService';
import { useFetch } from '../../hooks/useFetching';

const TodoList = ({ todos, remove }) => {
	const [statusNames, setStatusNames] = useState([])

	const [fetchStatusNames, isLoading, error] = useFetch(async () => {
		let statuses = await todoService.todoStatuses()
		setStatusNames([...statuses.map(status => status.name)])
	})

	useEffect(() => {
		fetchStatusNames()
	}, [])

	if (!todos.length) {
		return <div className={classes.todosNotFound}>Todos not found...</div>
	}

	return (
		<div className={classes.wrapper}>
			<table>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Task name</th>
						<th scope="col">Status</th>
						<th scope="col">Date</th>
						<th scope="col">Edit</th>
						<th scope="col">Remove</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo =>
						<TodoItem
							key={todo.id}
							todo={todo}
							remove={remove}
							statusNames={statusNames}
						/>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;