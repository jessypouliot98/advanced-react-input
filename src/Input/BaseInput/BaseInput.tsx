import React from 'react';
import { inputValue } from '../../types';
import { inputType } from '../Input';

export interface BaseInputProps {
	type: inputType,
	className?: string,
	style?: React.CSSProperties,
	name?: string,
	value?: inputValue,
	defaultValue?: inputValue,
	placeholder?: string,
	required?: boolean,
	disabled?: boolean,
	readOnly?: boolean,
	filter?: <T>(value: T) => T,
	match?: RegExp | (<T>(value: T) => boolean),
	onMount?: <T>(value: T) => void,
	onChange?: <T>(value: T) => void,
	onSubmit?: <T>(value: T) => void,
	onFocus?: (ref: React.Ref<any>) => void,
	onBlur?: (ref: React.Ref<any>) => void,
	onValidate?: (isValid: boolean) => void,
}

export interface BaseInputState {
	value?: inputValue,
}

abstract class BaseInput<P extends BaseInputProps = BaseInputProps> extends React.Component<P, BaseInputState> {

	protected _ref: unknown;

	public state = {
		value: this.props.defaultValue || '',
	}

	public componentDidMount() {
		this.props.onMount?.(this.value);
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

	protected onChangeEvent: (...params: any) => void = (event: React.ChangeEvent<any>): void => {
		this.onChange(event.target.value);
	}

	protected onChange = (value: inputValue, callback?: () => void) => {
		value = this.filter(value);

		if (this.useStateValue) {
			this.setState({ value }, callback);
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
		const isValid = this.validate(value);

		if (!isValid) {
			return;
		}

		this.props.onSubmit?.(value);
	}

	protected wrapper(content: React.ReactChild) {
		return (
			<div
				className={['ari', `ari-type-${this.props.type}`, this.props.className].join(' ')}
				style={this.props.style}
			>
				{content}
			</div>
		);
	}

	protected wrap(input: React.ReactChild) {
		return this.wrapper((
			<div className={'ari-border-b ari-py-1 ari-px-2'}>
				{input}
			</div>
		));
	}

	protected wrapGroup(inputs: React.ReactChild[]) {
		return this.wrapper((
			<div className={'ari-border-b'}>
				{inputs.map(input => React.Children.map(input, child => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, {
							...child.props,
							className: [child.props.className || '', 'ari-py-1 ari-px-2'].join(' ')
						});
					}

					return child;
				}))}
			</div>
		));
	}

}

export default BaseInput;
