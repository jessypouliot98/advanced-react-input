export type obj<T = any> = { [key: string]: T };

export type focusableCallbackProp<V> = { ref: null, value?: V };

export interface InputPropTypes<T = string> {
	className?: string,
	style?: React.CSSProperties,
	name?: string,
	value?: T,
	defaultValue?: T,
	// required?: boolean, @TODO
	disabled?: boolean,
	onChange: onChangeFunction<T>,
	onFocus?: (params: focusableCallbackProp<T>) => void,
	onBlur?: (params: focusableCallbackProp<T>) => void,
}

export type onChangeFunction<T = string> = (value?: T) => void;

export type complexOption<T = string> = { label: string, value: T };
export type option<T = string> = complexOption<T> | string;
export type optionList<T> = option<T>[];
