import React from 'react';
import { BaseInputProps } from './BaseInput/BaseInput';
import InputString, { stringType } from './InputString/InputString';
import InputTextArea, { textareaType } from './InputTextArea/InputTextArea';
import InputNumber, { numberType } from './InputNumber/InputNumber';
import InputDate, { dateType } from './InputDate/InputDate';
import InputBoolean, { booleanType } from './InputBoolean/InputBoolean';
import InputCheckbox, { checkboxType } from './InputCheckbox/InputCheckbox';
import InputRadio, { radioType } from './InputRadio/InputRadio';
import InputSelect, { selectType } from './InputSelect/InputSelect';
import InputSlider, { sliderType } from './InputSlider/InputSlider';
import InputRepeater, { repeaterType } from './InputRepeater/InputRepeater';
import { option } from '../types';

export type inputType = stringType | textareaType | numberType | dateType | booleanType | checkboxType | radioType | selectType | sliderType | repeaterType;
type inputValue = any;

export interface InputProps extends BaseInputProps {
	type: inputType,
	value?: inputValue,
	defaultValue?: inputValue,
	options?: option[],
	subType?: inputType,
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

			case 'boolean':
				return <InputBoolean {...this.props as any} />;

			case 'checkbox':
				return <InputCheckbox {...this.props as any} />;

			case 'radio':
				return <InputRadio {...this.props as any} />;

			case 'select':
				return <InputSelect {...this.props as any} />;

			case 'slider':
				return <InputSlider {...this.props as any} />;

			case 'repeater':
				return <InputRepeater {...this.props as any} />

			default:
				console.error(`Unkown input type: ${this.props.type}`);

				return null;
		}
	}

}

export default Input;
