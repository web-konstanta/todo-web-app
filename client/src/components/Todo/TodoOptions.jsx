import React from 'react';
import TodoFilter from './TodoFilter';
import Button from '../UI/Button/Button';
import classes from '../../styles/modules/Todo.module.css';
import { Link } from 'react-router-dom';

const TodoOptions = ({ filter, setFilter }) => {
	return (
		<div className={`${classes.wrapper} ${classes.todosOptions}`}>
			<TodoFilter filter={filter} setFilter={setFilter} />
			<Button btnClassName="addTask"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/todo/create">Add task</Link></Button>
		</div>
	);
};

export default TodoOptions;