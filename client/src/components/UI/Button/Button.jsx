import React from 'react';
import './Button.css'

const Button = ({ children, btnClassName, ...props }) => {
	return (
		<button
			{...props}
			className={btnClassName}
		>
			{children}
		</button>
	);
};

export default Button;