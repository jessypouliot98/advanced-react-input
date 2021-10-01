import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'number' | 'int' | 'uint';

export interface InputNumberProps extends InputPropTypes<number> {
	type: types,
	min?: number,
	max?: number,
}

const mapStringToNumber = (value: string, type: types): number | undefined => {
	if (value === '') {
		return undefined;
	}

	switch (type) {
		case 'number':
		default:
			return parseFloat(value);
	}
}

const InputNumber: React.FC<InputNumberProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'number', props.type);
	const { value, setValue } = useInputValue<number>(props);

	const onChange = onInputChange((value) => {
		setValue(mapStringToNumber(value, props.type));
	});

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'number'}
				value={value || ''}
				min={props.min}
				max={props.max}
				onChange={onChange}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputNumber;
