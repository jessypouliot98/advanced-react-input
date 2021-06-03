import React from 'react';
import { Input } from '../';

class App extends React.Component<any> {

	state: any = {
		checkbox: [],
	}

	render() {
		const props = {
			className: 'input',
			placeholder: 'placeholder',
			onChange: (v: any) => console.log(v),
		};

		const options = {
			options: [
				{ value: '123', label: 'One' },
				{ value: 'gef', label: 'Two' },
				{ value: 'abc', label: 'Three' },
			],
		};

		const inputs = [
			<Input type={'string'} {...props} defaultValue={'dsdsd'} />,
			<Input type={'password'} {...props} />,
			<Input type={'email'} {...props} />,
			<Input type={'url'} {...props} defaultValue={'dsdsd'} />,
			<Input type={'tel'} {...props} />,
			<Input type={'textarea'} {...props} />,
			<Input type={'number'} {...props} />,
			<Input type={'int'} {...props} />,
			<Input type={'uint'} {...props} />,
			<Input type={'date'} {...props} />,
			<Input type={'time'} {...props} />,
			<Input type={'datetime'} {...props} />,
			<Input type={'month'} {...props} />,
			<Input type={'week'} {...props} />,
			<Input type={'day'} {...props} />,
			<Input type={'checkbox'} {...props} {...options} />,
			<Input type={'boolean'} {...props} {...options} />,
			<Input type={'radio'} {...props} {...options} />,
			<Input type={'select'} {...props} {...options} />,
			<Input type={'slider'} {...props} />,
			<Input type={'repeater'} subType={'boolean'} {...props} />,
		];

		return (
			<div className={'ari-flex ari-flex-wrap ari-p-5 ari-items-end'}>
				{inputs.map((input, i) => (
					<div key={i} className={'item ari-p-2'}>{input}</div>
				))}
			</div>
		);
	}

}


export default App;
