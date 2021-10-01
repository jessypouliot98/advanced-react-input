import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'string' | 'password' | 'email' | 'url' | 'tel';

export interface InputStringProps extends InputPropTypes<string> {
	type: types,
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
	const { value, setValue } = useInputValue<string>(props);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={mapStringTypesToInputType(props.type)}
				value={value || ''}
				onChange={onInputChange(setValue)}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputString;
