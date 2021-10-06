import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'textarea';

export interface InputTextAreaProps extends InputPropTypes<string> {
	placeholder?: string,
}

const InputText: React.FC<InputTextAreaProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'textarea');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	return (
		<div className={containerStyle} style={props.style}>
			<textarea
				className={inputStyle}
				name={props.name}
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

export default InputText;
