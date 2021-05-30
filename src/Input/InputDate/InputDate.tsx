import React from 'react';
import BaseInput from '../BaseInput/BaseInput';

export type dateType = 'date' | 'time' | 'datetime' | 'month' | 'week' | 'day';

class InputDate extends BaseInput {

	protected _ref: React.RefObject<HTMLInputElement> = React.createRef();

	public componentDidMount() {
		this._ref?.current?.addEventListener('keyup', this.onSubmitEvent);
	}

	public componentWillUnmount() {
		this._ref?.current?.removeEventListener('keyup', this.onSubmitEvent);
	}

	protected get type(): string {
		switch (this.props.type) {
			case 'time':
				return 'time';

			case 'datetime':
				return 'datetime-local';

			case 'month':
				return 'month';

			case 'week':
				return 'week';

			case 'day':
				return 'number';

			case 'date':
			default:
				return 'date';
		}
	}

	protected get min(): number | undefined {
		switch (this.props.type) {
			case 'day':
				return 1;

			default:
				return;
		}
	}

	protected get max(): number | undefined {
		switch (this.props.type) {
			case 'day':
				return 31;

			default:
				return;
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
				min={this.min}
				max={this.max}
			/>
		);
	}

}

export default InputDate;
