import React from 'react';
import { Input } from '../src';

class App extends React.Component<any> {

	render() {
		const props = {
			className: 'input',
			placeholder: 'placeholder',
		}
		return (
			<div className={'ari-flex ari-flex-wrap ari-p-5 ari-items-end'}>
				<Input type={'string'} {...props} defaultValue={'dsdsd'} />
				<Input type={'password'} {...props} />
				<Input type={'email'} {...props} />
				<Input type={'url'} {...props} defaultValue={'dsdsd'} />
				<Input type={'tel'} {...props} />
				<Input type={'textarea'} {...props} />
				<Input type={'number'} {...props} />
				<Input type={'int'} {...props} />
				<Input type={'uint'} {...props} />
				<Input type={'date'} {...props} />
				<Input type={'time'} {...props} />
				<Input type={'datetime'} {...props} />
				<Input type={'month'} {...props} />
				<Input type={'week'} {...props} />
				<Input type={'day'} {...props} />
			</div>
		);
	}

}


export default App;
