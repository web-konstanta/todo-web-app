import React from 'react';
import classes from './Input.module.css';

const Input = ({ styles, ...props }) => {
	return (
		<input
			{...props}
			style={styles}
			className={classes.input}
		/>
	);
};

export default Input;