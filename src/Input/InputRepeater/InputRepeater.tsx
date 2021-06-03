import React from 'react';
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput';
import Input, { inputType } from '../Input';
import Button from '../../Button/Button';
import uniqid from 'uniqid';

export type repeaterType = 'repeater';

export interface InputRepeaterState extends BaseInputState {
	inputIds: string[],
}

export interface InputRepeaterProps extends BaseInputProps {
	subType: inputType,
}

class InputRepeater extends BaseInput<InputRepeaterProps> {

	protected _inputIds: InputRepeaterState['inputIds'] = [];

	public state = {
		value: { },
	}

	public componentDidMount() {
		if (!this.props.defaultValue) {
			this.add();
		} else if (Array.isArray(this.props.defaultValue)) {
			this.props.defaultValue.forEach(value => this.add(value));
		} else {
			this.add(this.props.defaultValue);
		}
	}

	protected get inputProps(): any {
		const {
			defaultValue, value, type,
			className, subType, ...props
		} = this.props;

		return {
			className: ['ari-clear-sub-input', className].join(' '),
			type: subType,
			...props,
		};
	}

	protected add = (value?: any) => {
		const newId = uniqid();

		this._inputIds = [...this._inputIds, newId];

		this.setState(prevState => ({ value: { ...prevState.value, [newId]: value }} ));
	}

	protected remove = (id: string) => {
		this._inputIds = this._inputIds.filter(inputId => inputId !== id);

		this.setState(
			prevState => {
				const value = { ...prevState.value };
				delete value[id];

				return { value };
			},
			this.sendOnChange,
		);
	}

	protected getValue = (id: string): any => {
		return (this.state.value as any)[id];
	}

	protected sendOnChange = () => {
		const values = this._inputIds.map(id => this.getValue(id));

		this.props.onChange?.(values);
	}

	protected onChangeEvent = (id: string, value: any): void => {
		this.setState(
			prevState => ({ value: { ...prevState.value, [id]: value } }),
			this.sendOnChange,
		);
	}

	render() {
		return this.wrapper((
			<div>
				{this._inputIds.map((id, i) => (
					<div key={id} className={`ari-type-${this.props.type}-sub ari-type-sub-${this.props.subType} ari-flex`}>
						<div
							className={[
								'ari-relative ari-w-6 ari-bg-gray-100 ari-flex ari-justify-center ari-items-center ari-text-gray-400 ari-select-none'
							].join(' ')}
						>
							<button
								className={[
									`ari-type-${this.props.type}-remove`,
									'ari-absolute ari-transition ari-opacity-0',
									'ari-w-4 ari-h-4 ari-flex ari-justify-center ari-items-center',
									'ari-bg-gray-400 ari-text-white ari-rounded',
									'focus:ari-outline-none',
								].join(' ')}
								onClick={() => this.remove(id)}
							>
								<span className={'ari-leading-none'}>-</span>
							</button>
							<span>{i + 1}</span>
						</div>

						<div className={'ari-w-full'}>
							<Input
								{...this.inputProps}
								value={this.getValue(id)}
								onMount={(value: any) => this.onChangeEvent(id, value)}
								onChange={(value: any) => this.onChangeEvent(id, value)}
							/>
						</div>
					</div>
				))}

				<div className={'ari-flex ari-justify-end ari-py-1'}>
					<Button
						className={`ari-type-${this.props.type}-add`}
						onClick={this.add}
					>
						<span>Add</span>
					</Button>
				</div>
			</div>
		));
	}

}

export default InputRepeater;
