export type obj<T = any> = { [key: string]: T };

export interface InputPropTypes<T = string> {
	className?: string,
	style?: React.CSSProperties,
	name?: string,
	value?: T,
	defaultValue?: T,
	required?: boolean,
	disabled?: boolean,
	onChange: onChangeFunction<T>,
	onFocus?: () => void,
	onBlur?: () => void,
}

export type onChangeFunction<T = string> = (value?: T) => void;

export type complexOption<T = string> = { label: string, value: T };
export type option<T = string> = complexOption<T> | string;
export type optionList<T> = option<T>[];
