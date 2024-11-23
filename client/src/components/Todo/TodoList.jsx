import React from 'react';
import '../../styles/static/tables.css';
import classes from '../../styles/modules/Todo.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
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
						<th scope="col">Edit</th>
						<th scope="col">Remove</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo =>
						<TodoItem key={todo.id} todo={todo} />
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;