import React from 'react';
import classes from './Select.module.css'

const Select = ({ defaultOption, options, ...props }) => {
	return (
		<select
			{...props}
			className={classes.select}
		>
			<option value="">{defaultOption}</option>
			{options.map((option, key) =>
				<option key={key} value={option.value}>{option.name}</option>
			)}
		</select>
	);
};

export default Select;