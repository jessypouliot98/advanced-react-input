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

export const useInputStyle = (props: InputPropTypes<any>, name: string, type?: string) => {
	const containerClass = 'ari-container';
	const inputClass = 'ari-input';
	const containerClassId = `${containerClass}-${name}`;
	const inputClassId = `${inputClass}-${name}`;
	
	return {
		containerStyle: clsx(
			containerClass,
			containerClassId,
			!!type && `${containerClassId}--${type}`,
			props.disabled && `${containerClass}--disabled`,
			props.className,
		),
		inputStyle: clsx(
			inputClass,
			inputClassId,
			!!type && `${inputClassId}--${type}`,
		),
	}
}

export const useInputEvent = <T = any>(props: InputPropTypes<any>, value: T) => {
	const inputRef = null;

	return {
		event: {
			onFocus: () => {
				props.onFocus?.({ ref: inputRef, value });
			},
			onBlur: () => {
				props.onBlur?.({ ref: inputRef, value });
			}
		},
	}
}