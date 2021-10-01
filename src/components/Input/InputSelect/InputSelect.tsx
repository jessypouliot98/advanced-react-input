import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { complexOption, InputPropTypes, optionList } from '../../../types';
import { onInputChange } from '../../../utils/dom';

export type types = 'select';

export interface InputSelectProps extends InputPropTypes<string> {
	options?: optionList<string>,
}

const InputSelect: React.FC<InputSelectProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'select');
	const { value, setValue } = useInputValue<string>(props);

	return (
		<div className={containerStyle} style={props.style}>
			<select
				className={inputStyle}
				name={props.name}
				value={value || ''}
				onChange={onInputChange(setValue)}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			>
				{(props.options || []).map(option => {
					if (typeof option === 'string') {
						option = { label: option, value: option } as complexOption;
					}

					return (
						<option key={option.value} value={option.value}>{option.label}</option>
					)
				})}
			</select>
		</div>
	)
}

export default InputSelect;
