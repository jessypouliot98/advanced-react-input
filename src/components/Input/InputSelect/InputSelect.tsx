import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes, optionList } from '../../../types';
import { onInputChange } from '../../../utils/dom';
import { getOption } from '../../../utils/types';

export type types = 'select';

export interface InputSelectProps extends InputPropTypes<string> {
	options?: optionList<string>,
	placeholder?: string,
}

const EMPTY_VALUE = 'ari-null';

const InputSelect: React.FC<InputSelectProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'select');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);

	const onChange = onInputChange((value) => {
		if (value === EMPTY_VALUE) {
			setValue(undefined);
			return;
		}

		setValue(value);
	});

	return (
		<div className={containerStyle} style={props.style}>
			<select
				className={inputStyle}
				name={props.name}
				value={value || ''}
				disabled={props.disabled}
				onChange={onChange}
				onFocus={event.onFocus}
				onBlur={event.onBlur}
			>
				<option value={EMPTY_VALUE}>
					{props.placeholder || '...'}
				</option>

				{(props.options || []).map(opt => {
					const option = getOption(opt);

					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default InputSelect;
