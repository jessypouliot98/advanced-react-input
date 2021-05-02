import React from 'react';
import { Input } from '../src';

class App extends React.Component<any> {

	render() {
		return (
			<div>
				<Input type={'string'} defaultValue={'dsdsd'} />
				<Input type={'password'} />
				<Input type={'email'} />
				<Input type={'url'} defaultValue={'dsdsd'} />
				<Input type={'tel'} />
				<Input type={'number'} />
				<Input type={'int'} />
				<Input type={'uint'} />
			</div>
		);
	}

}


export default App;
