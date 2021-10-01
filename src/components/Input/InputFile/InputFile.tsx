import React from 'react';
import { useInputStyle, useInputValue } from '../../../hooks';
import { InputPropTypes } from '../../../types';
import { onFileChange } from '../../../utils/dom';

export type types = 'file';

export interface InputFileProps extends InputPropTypes<FileList> {
	multiple?: boolean,
	accept?: string,
}

const InputBoolean: React.FC<InputFileProps> = (props) => {
	const { inputStyle, containerStyle } = useInputStyle(props, 'file');
	const { value: _, setValue } = useInputValue<FileList>(props);
	
	const onChange = onFileChange(value => setValue(value || undefined));

	return (
		<div className={containerStyle} style={props.style}>
			<input
				className={inputStyle}
				name={props.name}
				type={'file'}
				multiple={props.multiple}
				accept={props.accept}
				onChange={onChange}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
		</div>
	)
}

export default InputBoolean;
