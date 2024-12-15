import React from 'react';
import classes from './Select.module.css'

const Select = React.forwardRef(({ defaultOption, options, statusId, ...props }, ref) => {
	return (
		<select
			{...props}
			className={classes.select}
			ref={ref}
			value={statusId || ''}  // Используйте value, чтобы контролировать выбранную опцию
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