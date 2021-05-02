import React from 'react';
import InputString, { stringType } from './InputString/InputString';
import InputNumber, { numberType } from './InputNumber/InputNumber';

type inputType = stringType | numberType;
type inputValue = any;

export interface InputProps {
	type: inputType,
	value?: inputValue,
	defaultValue?: inputValue,
}

class Input extends React.Component<InputProps, any> {

	render() {
		switch (this.props.type) {
			case 'string':
			case 'password':
			case 'email':
			case 'url':
			case 'tel':
				return <InputString {...this.props} />;

			case 'number':
			case 'int':
			case 'uint':
				return <InputNumber {...this.props} />

			default:
				console.error(`Unkown input type: ${this.props.type}`);

				return null;
		}
	}

}

export default Input;
