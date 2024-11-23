import React from 'react';
import TodoFilter from './TodoFilter';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Todo.module.css';

const TodoOptions = ({ filter, setFilter }) => {
	return (
		<div className={`${classes.wrapper} ${classes.todosOptions}`}>
			<TodoFilter filter={filter} setFilter={setFilter} />
			<Button btnClassName="addTask">Add Task</Button>
		</div>
	);
};

export default TodoOptions;