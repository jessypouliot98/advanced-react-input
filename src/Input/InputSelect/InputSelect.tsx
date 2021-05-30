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

	protected onChangeEvent = (option: option): void => {
		const isSelected = this.isSelected(option);

		if (isSelected) {
			this.onChange(undefined);
			return;
		}

		this.onChange([option.value]);
	}

	render() {
		const getOptions = (option: option) => {
			return (
				<option key={option.value} value={option.value}>{option.label}</option>
			)
		};

		return this.wrap((
			<select className={'ari-touchable'}>
				{this.props.options.map(option => getOptions(option))}
			</select>
		));
	}

}

export default InputSelect;
