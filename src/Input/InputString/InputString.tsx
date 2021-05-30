import React from 'react';
import BaseInput from '../BaseInput/BaseInput';

export type stringType = 'string' | 'email' | 'url' | 'password' | 'tel';

class InputString extends BaseInput {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public componentDidMount() {
		this._ref?.current?.addEventListener('keyup', this.onSubmitEvent);
	}

	public componentWillUnmount() {
		this._ref?.current?.removeEventListener('keyup', this.onSubmitEvent);
	}

	protected get type(): string {
		switch (this.props.type) {
			case 'email':
				return 'email';

			case 'password':
				return 'password';

			case 'url':
				return 'url';

			case 'tel':
				return 'tel';

			case 'string':
			default:
				return 'text';
		}
	}

	render() {
		return this.wrap(
			<input
				ref={this._ref}
				className={'ari-touchable'}
				type={this.type}
				name={this.props.name}
				value={this.value}
				placeholder={this.props.placeholder}
				onChange={this.onChangeEvent}
			/>
		);
	}

}

export default InputString;
