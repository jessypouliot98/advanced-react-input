import React from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput';
import Checkbox from '../../Checkbox/Checkbox';
import { option, inputValue } from '../../types';

export type radioType = 'radio';

export interface InputRadioProps extends BaseInputProps {
	options: option[],
}

class InputRadio extends BaseInput<InputRadioProps> {

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

		if (value.length === 0) {
			return [];
		}

		return [value[0]];
	}

	protected isChecked = (option: option): boolean => {
		return this.value.some(value => value === option.value);
	}

	protected onChangeEvent = (option: option): void => {
		const isChecked = this.isChecked(option);

		if (isChecked) {
			this.onChange(undefined);
			return;
		}

		this.onChange(option.value);
	}

	render() {
		const getInput = (option: option) => {
			const isChecked = this.isChecked(option);

			return (
				<label
					key={option.value}
					className={[
						'ari-transition ari-cursor-pointer ari-flex ari-items-center ari-touchable',
						'hover:ari-bg-gray-100',
						isChecked ? 'ari-bg-blue-100' : 'ari-bg-white',
					].join(' ')}
				>
					<div className={'ari-flex-1'}>
						<span className={'ari-select-none'}>{option.label}</span>
					</div>

					<input
						ref={this._ref}
						className={'ari-absolute ari-top-0 ari-left-0 ari-opacity-0 ari-invisible'}
						type={'radio'}
						name={this.props.name}
						checked={isChecked}
						onClick={() => this.onChangeEvent(option)}
						onChange={() => {}}
					/>

					<Checkbox
						className={'ari-mr-1'}
						isChecked={isChecked}
						type={'radio'}
						size={'md'}
						onClick={() => this.onChangeEvent(option)}
					/>
				</label>
			)
		};

		return this.wrapGroup(
			this.props.options.map(option => getInput(option))
		);
	}

}

export default InputRadio;
