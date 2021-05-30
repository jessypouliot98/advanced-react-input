# Advanced React Input

A scalable TypeScript React component from inputs

## Installation

```bash
npm i -S advanced-react-input
```

## Usage

```javascript
import { Input } from 'advanced-react-input'

const props = {
	className: 'input',
	placeholder: 'placeholder...',
	onChange: (v) => console.log(v),
};

const options = {
	options: [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
	],
	defaultValue: [],
};

const App = () => (
	<div className={'form'}>
		<Input type={'string'} {...props} />
		<Input type={'password'} {...props} />
		<Input type={'email'} {...props} />
		<Input type={'url'} {...props} />
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
		<Input type={'checkbox'} {...props} {...options} />
		<Input type={'radio'} {...props} {...options} />
		<Input type={'select'} {...props} {...options} />
	</div>
);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://opensource.org/licenses/ISC)
