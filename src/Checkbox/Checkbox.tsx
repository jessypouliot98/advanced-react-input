import React from 'react';
import { checkboxType } from '../Input/InputCheckbox/InputCheckbox';
import { radioType } from '../Input/InputRadio/InputRadio';

export interface CheckboxProps {
	className?: string,
	type: checkboxType | radioType,
	isChecked: boolean,
	size: string,
	onClick: () => void,
}

const Checkbox: React.FC<CheckboxProps> = ({ className, type, isChecked, size, onClick }) => {
	const getStyle = (): string => {
		switch (type) {
			case 'radio':
				return 'ari-rounded-full';

			case 'checkbox':
			default:
				return 'ari-rounded';
		}
	}

	const getSize = (): string => {
		switch (size) {
			case 'sm':
				return 'ari-w-3 ari-h-3';

			case 'lg':
				return 'ari-w-6 ari-h-6';

			case 'xl':
				return 'ari-w-8 ari-h-8';

			case 'md':
			default:
				return 'ari-w-4 ari-h-4';
		}
	}

	const getState = (): string => {
		return isChecked
			? 'ari-bg-blue-500 ari-border-blue-500'
			: 'ari-bg-white';
	}

	return (
		<button
			className={[
				className,
				'ari-border ari-border-gray-700 focus:ari-outline-none',
				getSize(),
				getStyle(),
				getState(),
			].join(' ')}
			onClick={() => onClick()}
		/>
	)
}

export default Checkbox;
