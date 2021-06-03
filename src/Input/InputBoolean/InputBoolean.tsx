import React from 'react';
import BaseInput from '../BaseInput/BaseInput';
import Toggle from '../../Toggle/Toggle';

export type booleanType = 'boolean';

class InputBoolean extends BaseInput {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public state = {
		value: this.props.defaultValue || false,
	}

	protected get value(): boolean {
		return this.useStateValue ? this.state.value : this.props.value || false;
	}

	protected onChangeEvent = (isChecked: boolean): void => {
		this.onChange(isChecked);
	}

	render() {
		const isChecked = this.value;

		return this.wrap((
			<label
				className={[
					'ari-transition ari-cursor-pointer ari-flex ari-items-center ari-touchable',
					'hover:ari-bg-gray-100 ari-bg-white',
				].join(' ')}
			>
				<div className={'ari-flex-1'}>
					<span className={'ari-select-none'}>{this.props.placeholder}</span>
				</div>

				<input
					ref={this._ref}
					className={'ari-absolute ari-top-0 ari-left-0 ari-opacity-0 ari-invisible'}
					type={'checkbox'}
					name={this.props.name}
					checked={isChecked}
					onClick={() => this.onChangeEvent(!isChecked)}
					onChange={() => {}}
				/>

				<Toggle
					className={'ari-mr-1'}
					isChecked={isChecked}
					size={'md'}
					onClick={() => this.onChangeEvent(!isChecked)}
				/>
			</label>
		));
	}

}

export default InputBoolean;
