import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onCheckboxChange } from '../../../utils/dom';

export type types = 'boolean';

export interface InputBooleanProps extends InputPropTypes<boolean> { }

const InputBoolean: React.FC<InputBooleanProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'boolean');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'checkbox'}
				checked={!!value}
				disabled={props.disabled}
				onChange={onCheckboxChange(setValue)}
				onFocus={event.onFocus}
				onBlur={event.onBlur}
			/>
		</div>
	)
}

export default InputBoolean;
