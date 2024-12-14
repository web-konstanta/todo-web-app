import React from 'react';
import classes from './Select.module.css'

const Select = React.forwardRef(({ defaultOption, options, ...props }, ref) => {
	return (
		<select
			{...props}
			className={classes.select}
			ref={ref}
		>
			<option value="">{defaultOption}</option>
			{options.map((option, key) =>
				<option key={key} value={option.value}>{option.name}</option>
			)}
		</select>
	);
})

export default Select;