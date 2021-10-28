import React from 'react';
import InputString, { InputStringProps, types as stringTypes } from './InputString/InputString';
import InputTextArea, { InputTextAreaProps, types as textAreaTypes } from './InputTextArea/InputTextArea';
import InputNumber, { InputNumberProps, types as numberTypes } from './InputNumber/InputNumber';
import InputBoolean, { InputBooleanProps, types as booleanTypes } from './InputBoolean/InputBoolean';
import InputFile, { InputFileProps, types as fileTypes } from './InputFile/InputFile';
import InputDate, { InputDateProps, types as dateTypes } from './InputDate/InputDate';
import InputRange, { InputRangeProps, types as rangeTypes } from './InputRange/InputRange';
import InputSelect, { InputSelectProps, types as selectTypes } from './InputSelect/InputSelect';
import InputCheckbox, { InputCheckboxProps, types as checkboxTypes } from './InputCheckbox/InputCheckbox';
import InputRadio, { InputRadioProps, types as radioTypes } from './InputRadio/InputRadio';
import InputColor, { InputColorProps, types as colorTypes } from './InputColor/InputColor';

export type inputTypes = stringTypes | textAreaTypes | numberTypes | booleanTypes | fileTypes | dateTypes | rangeTypes | selectTypes | checkboxTypes | radioTypes | colorTypes;

export type InputProps = (
	({ type: stringTypes } & InputStringProps) |
	({ type: textAreaTypes } & InputTextAreaProps) |
	({ type: numberTypes } & InputNumberProps) |
	({ type: booleanTypes } & InputBooleanProps) |
	({ type: fileTypes } & InputFileProps) |
	({ type: dateTypes } & InputDateProps) |
	({ type: rangeTypes } & InputRangeProps) |
	({ type: selectTypes } & InputSelectProps) |
	({ type: checkboxTypes } & InputCheckboxProps) |
	({ type: radioTypes } & InputRadioProps) |
	({ type: colorTypes } & InputColorProps)
);

const Input: React.FC<InputProps> = (props) => {
	switch (props.type) {
		case 'color':
			return <InputColor {...props} />;

		case 'radio':
			return <InputRadio {...props} />;

		case 'checkbox':
			return <InputCheckbox {...props} />;

		case 'select':
			return <InputSelect {...props} />;

		case 'range':
			return <InputRange {...props} />;

		case 'date':
			return <InputDate {...props} />;

		case 'file':
			return <InputFile {...props} />;

		case 'boolean':
			return <InputBoolean {...props} />;

		case 'number':
		case 'int':
		case 'uint':
			return <InputNumber {...props} type={props.type} />;

		case 'textarea':
			return <InputTextArea {...props} />

		case 'string':
		case 'password':
		case 'email':
		case 'url':
			return <InputString {...props} type={props.type} />;

		default:
			return <InputString {...props} type={'string'} />;
	}
}

export default Input;
