import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onCheckboxChange } from '../../../utils/dom';

export type types = 'boolean';

export interface InputBooleanProps extends InputPropTypes<boolean> { }

const InputBoolean: React.FC<InputBooleanProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'boolean');
	const { value, setValue } = useInputValue<boolean>(props);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'checkbox'}
				checked={!!value}
				onChange={onCheckboxChange(setValue)}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputBoolean;
