import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'textarea';

export interface InputTextAreaProps extends InputPropTypes<string> { }

const InputText: React.FC<InputTextAreaProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'textarea');
	const { value, setValue } = useInputValue<string>(props);

	return (
		<div className={containerStyle} style={props.style}>
			<textarea
				className={inputStyle}
				name={props.name}
				value={value || ''}
				onChange={onInputChange(setValue)}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputText;
