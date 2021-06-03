import React from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput';
import { option, inputValue } from '../../types';

export type selectType = 'select';

export interface InputSelectProps extends BaseInputProps {
	options: option[],
}

class InputSelect extends BaseInput<InputSelectProps> {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public state = {
		value: this.props.defaultValue,
	}

	protected get value(): inputValue[] {
		const value = this.useStateValue ? this.state.value : this.props.value;

		if (value === undefined) {
			return [];
		}

		if (!Array.isArray(value)) {
			return [value];
		}

		return value;
	}

	protected isSelected = (option: option): boolean => {
		return this.value.some(value => value === option.value);
	}

	protected onChangeEvent = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = e.target.value;

		this.onChange(value);
	}

	render() {
		const getOptions = (option: option) => {
			return (
				<option key={option.value} value={option.value}>{option.label}</option>
			)
		};

		return this.wrap((
			<select
				className={'ari-touchable focus:ari-outline-none'}
				onChange={this.onChangeEvent}
			>
				{this.props.options.map(option => getOptions(option))}
			</select>
		));
	}

}

export default InputSelect;
