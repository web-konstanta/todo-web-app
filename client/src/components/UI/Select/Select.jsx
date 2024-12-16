import React from 'react';
import classes from './Select.module.css'

const Select = React.forwardRef(({ options, statusId, ...props }, ref) => {
	if (statusId) {
		<select
			{...props}
			className={classes.select}
			ref={ref}
		>
			{options.map((option, key) => (
				<option
					key={key}
					value={option.value}
					selected={statusId === option.id}
				>
					{option.name}
				</option>
			))}
		</select>
	}

	return (
		<select
			{...props}
			className={classes.select}
			ref={ref}
		>
			{options.map((option, key) => (
				<option key={key} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
});

export default Select;