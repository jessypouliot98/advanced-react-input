import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'string' | 'password' | 'email' | 'url' | 'tel';

export interface InputStringProps extends InputPropTypes<string> {
	type: types,
	placeholder?: string,
}

export const mapStringTypesToInputType = (type: types) => {
	switch (type) {
		case 'string':
			return 'text';

		default:
			return type;
	}
}

const InputString: React.FC<InputStringProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'string', props.type);
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={mapStringTypesToInputType(props.type)}
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
