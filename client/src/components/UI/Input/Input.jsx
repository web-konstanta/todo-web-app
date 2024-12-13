import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ styles, ...props }, ref) => {
	return (
		<input
			{...props}
			style={styles}
			className={classes.input}
			ref={ref}
		/>
	);
})

export default Input;