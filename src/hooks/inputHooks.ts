import { InputPropTypes } from './../types';
import { useEffect, useState, useDebugValue } from 'react';
import { onChangeFunction } from '../types';
import clsx from 'clsx';

export interface useInputValueParams<T = string> {
	value?: T,
	defaultValue?: T,
	isStateless?: boolean,
	onChange: onChangeFunction<T>,
}

export interface useInputValueReturn<T = string> {
	value?: T,
	setValue: onChangeFunction<T>,
	isStateless?: boolean,
}

export const useInputValue = <T = string>(props: useInputValueParams<T>): useInputValueReturn<T> => {
	const isStateless = props.isStateless || !!props.value;

	let payload: useInputValueReturn<T>;

	if (!isStateless) {
		const [value, setValue] = useState<T | undefined>(props.defaultValue);
	
		payload = {
			value,
			setValue: (value) => {
				setValue(value);
				props.onChange(value);
			},
			isStateless,
		}
	} else {
		payload = {
			value: props.value,
			setValue: (value) => props.onChange(value),
			isStateless,
		}
	}

	useEffect(() => {
		props.onChange(payload.value);
	}, []);

	useDebugValue(payload);

	return payload;
}

export interface useInputStyleReturn {
	inputStyle: string,
	containerStyle: string,
}

export const useInputStyle = (props: InputPropTypes<any>, name: string, type?: string): useInputStyleReturn => {
	const containerClassId = `ari-container-${name}`;
	const inputClassId = `ari-input-${name}`;
	
	return {
		containerStyle: clsx(containerClassId, !!type && `${containerClassId}--${type}`, props.className),
		inputStyle: clsx(inputClassId, !!type && `${inputClassId}--${type}`),
	}
}