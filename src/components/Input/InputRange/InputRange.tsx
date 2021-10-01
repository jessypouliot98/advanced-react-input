import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'range';

export interface InputRangeProps extends InputPropTypes<number> {
	min?: number,
	max?: number,
}

const InputRange: React.FC<InputRangeProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'range');
	const { value, setValue } = useInputValue<number>(props);

	const onChange = onInputChange((value) => setValue(+value));

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'range'}
				value={value || 0}
				onChange={onChange}
				min={props.min}
				max={props.max}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

InputRange.defaultProps = {
	min: 0,
	max: 100,
}

export default InputRange;
