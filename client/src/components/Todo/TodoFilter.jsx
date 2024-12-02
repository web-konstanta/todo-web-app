import React from 'react';
import Select from '../UI/Select/Select';
import Input from '../UI/Input/Input';
import classes from '../../styles/modules/Todo.module.css'

const TodoFilter = ({ filter, setFilter }) => {
	return (
		<div className={classes.todoFilter}>
			<Select
				defaultOption="Sort todos"
				options={[
					{ name: 'By title', value: 'title' },
					{ name: 'By date', value: 'createdAt' }
				]}
				onChange={e => setFilter({ ...filter, sort: e.target.value })}
			/>
			<Input
				type="text"
				placeholder="Search todo..."
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
		</div>
	);
};

export default TodoFilter;