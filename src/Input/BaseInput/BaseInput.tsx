import React from 'react';

export type inputValue = any;

export interface InputProps {
	type: string,
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

export interface InputState {
	value: inputValue,
}

class BaseInput extends React.Component<InputProps, InputState> {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public state = {
		value: this.props.defaultValue || '',
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
			<div>
				{input}
			</div>
		);
	}

}

export default BaseInput;
