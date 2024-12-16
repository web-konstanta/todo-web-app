import React from 'react';
import classes from './Select.module.css'

const Select = React.forwardRef(({ defaultOption, options, statusId, ...props }, ref) => {
	if (statusId) {
		<select
			{...props}
			className={classes.select}
			ref={ref}
		>
			<option value="">{defaultOption}</option>
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
			<option value="">{defaultOption}</option>
			{options.map((option, key) => (
				<option key={key} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
});

export default Select;