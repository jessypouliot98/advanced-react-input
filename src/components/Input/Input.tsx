import React from 'react';
import InputString, { types as stringTypes } from './InputString/InputString';
import InputTextArea, { types as textAreaTypes } from './InputTextArea/InputTextArea';
import InputNumber, { types as numberTypes } from './InputNumber/InputNumber';
import InputBoolean, { types as booleanTypes } from './InputBoolean/InputBoolean';
import InputFile, { types as fileTypes } from './InputFile/InputFile';
import InputDate, { types as dateTypes } from './InputDate/InputDate';
import InputRange, { types as rangeTypes } from './InputRange/InputRange';
import InputSelect, { types as selectTypes } from './InputSelect/InputSelect';
import InputCheckbox, { types as checkboxTypes } from './InputCheckbox/InputCheckbox';
import InputRadio, { types as radioTypes } from './InputRadio/InputRadio';
import { InputPropTypes } from '../../types'

export type inputTypes = stringTypes | textAreaTypes | numberTypes | booleanTypes | fileTypes | dateTypes | rangeTypes | selectTypes | checkboxTypes | radioTypes;

export interface InputProps extends InputPropTypes<any> {
	type: inputTypes,
}

const Input: React.FC<any> = (props) => {
	switch (props.type) {
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
