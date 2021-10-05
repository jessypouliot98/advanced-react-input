import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'date';

export interface InputDateProps extends InputPropTypes<string> {
	placeholder?: string,
}

const InputDate: React.FC<InputDateProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'date');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'date'}
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

export default InputDate;
