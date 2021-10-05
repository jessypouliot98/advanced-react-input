import clsx from 'clsx';
import React, { useState } from 'react';
import { obj } from '../../types';

export type setValueFunction = (name: string, value: any) => void;

export interface FormProps {
	className?: string,
	children?: (setValue: setValueFunction, submit: () => void, data: obj) => React.ReactChild,
	onSubmit?: (data: obj) => void,
}

const Form: React.FC<FormProps> = (props) => {
	const [data, setData] = useState<obj>({});

	const setValue: setValueFunction = (name, value) => {
		setData(prevData => ({
			...prevData,
			[name]: value,
		}));
	}
	
	const onSubmit = (e?: React.FormEvent) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		props.onSubmit?.(data);
	}

	return (
		<form className={clsx(props.className)} onSubmit={onSubmit}>
			{props.children?.(setValue, onSubmit, data)}
		</form>
	)
}

export default Form;