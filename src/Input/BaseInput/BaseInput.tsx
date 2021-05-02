import React from 'react';
import { convertToKebabCase } from '../../helper';

export type inputValue = any;

export interface BaseInputProps {
	type: string,
	className?: string,
	name?: string,
	value?: inputValue,
	defaultValue?: inputValue,
	placeholder?: string,
	required?: boolean,
	disabled?: boolean,
	readOnly?: boolean,
	filter?: <T>(value: T) => T,
	match?: RegExp | (<T>(value: T) => boolean),
	onChange?: <T>(value: T) => void,
	onSubmit?: <T>(value: T) => void,
	onFocus?: (ref: React.Ref<any>) => void,
	onBlur?: (ref: React.Ref<any>) => void,
	onValidate?: (isValid: boolean) => void,
}

export interface BaseInputState {
	value?: inputValue,
}

abstract class BaseInput extends React.Component<BaseInputProps, BaseInputState> {

	protected _ref: unknown;
	protected _className: string = '';

	public state = {
		value: this.props.defaultValue || '',
	}

	protected get className(): string {
		if (this._className) {
			return this._className;
		}

		this._className = convertToKebabCase((this as any).constructor.name);

		return this._className;
	}

	protected get useStateValue(): boolean {
		return this.props.value === undefined;
	}

	protected get value(): inputValue {
		return this.useStateValue ? this.state.value : this.props.value || '';
	}

	protected get textValue(): string {
		return this.value.toString();
	}

	protected filter = (value: inputValue): inputValue => {
		if (!this.props.filter) {
			return value;
		}

		return this.props.filter(value);
	}

	protected validate = (_value: inputValue): boolean => {
		return true;
	}

	protected onChangeEvent = (event: React.ChangeEvent<any>) => {
		this.onChange(event.target.value);
	}

	protected onChange = (value: inputValue) => {
		console.log({ value })
		value = this.filter(value);

		if (this.useStateValue) {
			this.setState({ value });
		}

		this.props.onChange?.(value);
	}

	protected onSubmitEvent = (event: KeyboardEvent) => {
		const ENTER_KEY = 'Enter';

		if (event.key !== ENTER_KEY) {
			return;
		}

		this.onSubmit(this.value);
	}

	protected onSubmit = (value: inputValue) => {
		console.log({ value });
		const isValid = this.validate(value);

		if (!isValid) {
			return;
		}

		this.props.onSubmit?.(value);
	}

	protected wrap(input: React.ReactChild) {
		return (
			<div className={['ari', `ari-${this.className}`, `ari-type-${this.props.type}`, this.props.className].join(' ')}>
				<div className={'ari-border-b ari-py-1 ari-px-2'}>
					{input}
				</div>
			</div>
		);
	}

}

export default BaseInput;