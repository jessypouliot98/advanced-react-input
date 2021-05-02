import React from 'react';
import { BaseInputProps } from './BaseInput/BaseInput';
import InputString, { stringType } from './InputString/InputString';
import InputTextArea, { textareaType } from './InputTextArea/InputTextArea';
import InputNumber, { numberType } from './InputNumber/InputNumber';
import InputDate, { dateType } from './InputDate/InputDate';

type inputType = stringType | textareaType | numberType | dateType;
type inputValue = any;

export interface InputProps extends BaseInputProps {
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

			case 'textarea':
				return <InputTextArea {...this.props} />;

			case 'number':
			case 'int':
			case 'uint':
				return <InputNumber {...this.props} />;

			case 'date':
			case 'time':
			case 'datetime':
			case 'month':
			case 'week':
			case 'day':
				return <InputDate {...this.props} />;

			default:
				console.error(`Unkown input type: ${this.props.type}`);

				return null;
		}
	}

}

export default Input;
