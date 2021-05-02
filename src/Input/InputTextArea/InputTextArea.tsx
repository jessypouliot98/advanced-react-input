import React from 'react';
import BaseInput from '../BaseInput/BaseInput';

export type textareaType = 'textarea';

class InputTextArea extends BaseInput {

	protected _ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

	public componentDidMount() {
		this._ref?.current?.addEventListener('keyup', this.onSubmitEvent);
	}

	public componentWillUnmount() {
		this._ref?.current?.removeEventListener('keyup', this.onSubmitEvent);
	}

	render() {
		return this.wrap(
			<textarea
				ref={this._ref}
				name={this.props.name}
				value={this.value}
				placeholder={this.props.placeholder}
				onChange={this.onChangeEvent}
			/>
		);
	}

}

export default InputTextArea;
