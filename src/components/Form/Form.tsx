import clsx from 'clsx';
import React, { useState } from 'react';
import { Dict } from '../../types';

export type setValueFunction<F extends {} = Dict> = (name: keyof F, value: any) => void;

export interface FormProps<F extends {} = Dict> {
	className?: string,
	children?: (setValue: setValueFunction<F>, submit: () => void, data: Partial<F>) => React.ReactChild,
	onSubmit?: (data: Partial<F>) => void,
}

function Form<F extends {} = Dict>(props: React.PropsWithChildren<FormProps<F>>) {
	const [data, setData] = useState<Partial<F>>({});

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
			{props.children?.(
				setValue as unknown as setValueFunction<F>,
				onSubmit,
				data
			)}
		</form>
	)
}

export default Form as typeof Form;