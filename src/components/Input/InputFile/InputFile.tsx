import React from 'react';
import { useInputEvent, useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onFileChange } from '../../../utils/dom';

export type types = 'file';

export interface InputFileProps<T = any> extends InputPropTypes<T> {
	multiple?: boolean,
	accept?: string,
}
export interface InputSingleFileProps extends InputFileProps<File> {
	multiple?: false,
}

export interface InputMultipleFilesProps extends InputFileProps<FileList> {
	multiple: true,
}

const InputBoolean: React.FC<InputSingleFileProps | InputMultipleFilesProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'file');
	const { value, setValue } = useInputValue<typeof props.value>(props);
	const { event } = useInputEvent<typeof props.value>(props, value);
	
	const onChange = onFileChange(value => {
		setValue(props.multiple ? (value || undefined) : (value?.[0]));
	});

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'file'}
				multiple={props.multiple}
				disabled={props.disabled}
				accept={props.accept}
				onChange={onChange}
				onFocus={event.onFocus}
				onBlur={event.onBlur}
			/>
		</div>
	)
}

export default InputBoolean;
