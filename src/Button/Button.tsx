import React from 'react';

export interface ButtonProps {
	children: React.ReactChild,
	className?: string,
	onClick: CallableFunction,
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => (
	<button
		className={[
			className,
			'ari-transition ari-bg-gray-200 ari-p-2 ari-rounded',
			'hover:ari-bg-blue-500 hover:ari-text-white',
			'focus:ari-outline-none',
		].join(' ')}
		onClick={() => onClick()}
	>
		{children}
	</button>
);

export default Button;
