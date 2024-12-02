import React from 'react';
import './Button.css'

const Button = ({ children, btnClassName, styles, ...props }) => {
	return (
		<button
			{...props}
			style={styles}
			className={btnClassName}
		>
			{children}
		</button>
	);
};

export default Button;