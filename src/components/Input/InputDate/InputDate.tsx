import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'date';

export interface InputDateProps extends InputPropTypes<string> { }

const InputDate: React.FC<InputDateProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'date');
	const { value, setValue } = useInputValue<string>(props);

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'date'}
				value={value || ''}
				onChange={onInputChange(setValue)}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputDate;
