import React from 'react';
import BaseInput from '../BaseInput/BaseInput';
import { normalizeNumber } from './helper';
import { inputValue } from '../../types';

export type numberType = 'number' | 'int' | 'uint';

class InputNumber extends BaseInput {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public componentDidMount() {
		this._ref?.current?.addEventListener('keyup', this.onSubmitEvent);
	}

	public componentWillUnmount() {
		this._ref?.current?.removeEventListener('keyup', this.onSubmitEvent);
	}

	protected filter = (value: inputValue): inputValue => {
		const normalizedValue = normalizeNumber(value)?.toString() || '';

		switch (this.props.type) {
			case 'int':
				value = parseInt(normalizedValue);
				break;

			case 'uint':
				value = Math.abs(parseInt(normalizedValue));
				break;
		}

		if (this.props.filter) {
			value = this.props.filter(value);
		}

		if (Number.isNaN(value)) {
			value = undefined;
		}

		return value;
	}

	render() {
		return this.wrap(
			<input
				ref={this._ref}
				className={'ari-touchable'}
				type={'number'}
				name={this.props.name}
				value={this.value}
				placeholder={this.props.placeholder}
				onChange={this.onChangeEvent}
			/>
		);
	}

}

export default InputNumber;
