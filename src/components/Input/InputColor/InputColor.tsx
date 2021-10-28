import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'color';

export interface InputColorProps extends InputPropTypes<string> {
	placeholder?: string,
}

const InputString: React.FC<InputColorProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'color');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'color'}
				value={value || ''}
				placeholder={props.placeholder}
				disabled={props.disabled}
				onChange={onInputChange(setValue)}
				onFocus={event.onFocus}
				onBlur={event.onBlur}
			/>
		</div>
	)
}

export default InputString;
