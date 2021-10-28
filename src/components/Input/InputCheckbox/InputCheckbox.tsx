import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { complexOption, InputPropTypes, optionList } from '../../../types';
import { onCheckboxChange } from '../../../utils/dom';
import { getOption } from '../../../utils/types';

export type types = 'checkbox';

export interface InputCheckboxProps extends InputPropTypes<string[]> {
	options?: optionList<string>,
}

const InputCheckbox: React.FC<InputCheckboxProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'checkbox');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	const onChange = (option: complexOption<string>) => onCheckboxChange((isChecked) => {
		if (isChecked) {
			setValue([...(value || []), option.value]); // TODO Refactor with prevValue callback
		} else {
			const nextValue = (value || []).filter(v => v !== option.value);
			
			setValue(nextValue.length > 0 ? nextValue : undefined); // TODO Refactor with prevValue callback
		}
	});

	const isChecked = (option: complexOption<string>) => (value || []).includes(option.value);

	return (
		<div className={containerStyle} style={props.style}>
			{(props.options || []).map(opt => {
				const option = getOption(opt);

				return (
					<label key={option.value}>
						<span>{option.label}</span>
						<input
							className={inputStyle}
							name={props.name}
							type={'checkbox'}
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

export default InputCheckbox;
