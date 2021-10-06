###### (v3.1.0-beta)
# Advanced React Input

Advanced React Input is a component library to build form in a normalized JavaScript/database oriented way without the HTML form caveats

## Installation

```bash
# with npm
npm i --save advanced-react-input

# with yarn
yarn add advanced-react-input
```

## Usage

#### Basic usage of `<Input />` component
```javascript
import Input from 'advanced-react-input'

const SomeTextInputComponent = () => (
  <Input
    type={'string'}
    className={'some-text-input'}
    defaultValue={'Foo'}
    placeholder={'Enter text here..'}
    disabled={false}
    onChange={(value) => console.log(value)}
    onFocus={({ value }) => console.log(`focused ! Current value is "${value}"`)}
    onBlur={({ value }) => console.log(`blurred! Current value is "${value}"`)}
  />
)
```

#### Basic usage of `<Form />` component
```javascript
import Input, { Form } from 'advanced-react-input'

const handleSubmit = (data) => {
  console.log(data); // { a: "foo", b: "lorem ipsum", c: 14, d: true, e: ['foo', 'bar'] }
}

const SomeForm = () => (
  <Form
    className={'some-form'}
    onSubmit={handleSubmit}
  >
    {(setValue, submit, data) => (
      <>
        <Input
          type={'string'}
          defaultValue={'foo'}
          onChange={(value) => setValue('a', value)}
        />
        <Input
          type={'textarea'}
          defaultValue={'lorem ipsum'}
          onChange={(value) => setValue('b', value)}
        />
        <Input
          type={'int'}
          defaultValue={14}
          onChange={(value) => setValue('c', value)}
        />
        <Input
          type={'boolean'}
          defaultValue={true}
          onChange={(value) => setValue('d', value)}
        />
        <Input
          type={'checkbox'}
          defaultValue={['foo', 'bar']}
          options={[
            { label: 'Foo', value: 'foo' },
            'bar',
            { label: 'Hello', 'world' },
          ]}
          onChange={(value) => setValue('e', value)}
        />

        <button>Submit</button>
      </>
    )}
  </Form>
)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://opensource.org/licenses/MIT)