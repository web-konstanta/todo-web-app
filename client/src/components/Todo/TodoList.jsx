import React from 'react';
import '../../styles/static/tables.css'
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Todo.module.css'

const TodoList = ({ todos }) => {
	return (
		<div className={classes.wrapper}>
			<Button btnClassName="addTask">Add Task</Button>
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
						<tr
							key={todo.id}
						>
							<th scope="row">{todo.id}</th>
							<td>{todo.title}</td>
							<td>{todo.status}</td>
							<td>Edit</td>
							<td>Remove</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;