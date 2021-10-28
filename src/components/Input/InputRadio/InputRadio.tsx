import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { complexOption, InputPropTypes, optionList } from '../../../types';
import { onCheckboxChange } from '../../../utils/dom';
import { getOption } from '../../../utils/types';

export type types = 'radio';

export interface InputRadioProps extends InputPropTypes<string> {
	options?: optionList<string>,
}

const InputRadio: React.FC<InputRadioProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'radio');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	const onChange = (option: complexOption<string>) => onCheckboxChange((isChecked) => {
		if (isChecked) {
			setValue(option.value);
		}
	});

	const isChecked = (option: complexOption<string>) => value === option.value;

	return (
		<div className={containerStyle} style={props.style}>
			{props.options.map(opt => {
				const option = getOption(opt);

				return (
					<label key={option.value}>
						<span>{option.label}</span>
						<input
							className={inputStyle}
							name={props.name}
							type={'radio'}
							checked={isChecked(option)}
							disabled={props.disabled}
							onChange={onChange(option)}
							onFocus={event.onFocus}
							onBlur={event.onBlur}
						/>
					</label>
				);
			})}
		</div>
	)
}

export default InputRadio;
