import React from 'react';
import classes from '../../styles/modules/Todo.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const TodoUpdateForm = () => {
	return (
		<div className={classes.wrapper}>
			<form className={classes.todoForm}>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						styles={{ width: '378px', padding: '10px' }}
					/>
				</div>
				<div className={classes.todoFormItem}>
					<Input
						type="text"
						styles={{ width: '378px', padding: '10px' }}
					/>
				</div>
				<Button
					type="submit"
					btnClassName="createTask"
					styles={{ width: '400px', padding: '10px' }}
				>
					Update task
				</Button>
			</form>
		</div>
	);
};

export default TodoUpdateForm;