import React from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput';
import { inputValue } from '../../types';

export type sliderType = 'slider';

export interface InputSliderProps extends BaseInputProps {
	min: number,
	max: number,
}

class InputSlider extends BaseInput<InputSliderProps> {

	static defaultProps = {
		min: 0,
		max: 100,
	}

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public state = {
		value: this.props.defaultValue || this.props.min,
	}

	public componentDidMount() {
		this._ref?.current?.addEventListener('keyup', this.onSubmitEvent);
	}

	public componentWillUnmount() {
		this._ref?.current?.removeEventListener('keyup', this.onSubmitEvent);
	}

	protected get value(): inputValue {
		const value = this.useStateValue ? this.state.value : this.props.value;

		if (typeof value === 'string' || value instanceof String) {
			return parseFloat(value as string);
		}

		if (typeof value !== 'number') {
			return this.props.min;
		}

		return value;
	}

	render() {
		return this.wrap(
			<div className={'ari-flex ari-justify-center ari-items-center ari--m-2'}>
				<div className={'ari-w-full ari-p-2'}>
					<input
						ref={this._ref}
						className={'ari-touchable'}
						type={'range'}
						name={this.props.name}
						value={this.value}
						placeholder={this.props.placeholder}
						onChange={this.onChangeEvent}
					/>
				</div>
				<div className={'ari-w-12 ari-text-right ari-p-2 ari-mr-1'}>
					{this.textValue}
				</div>
			</div>
		);
	}

}

export default InputSlider;
