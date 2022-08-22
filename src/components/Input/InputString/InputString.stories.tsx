import React, { useState } from "react";
import { InputString, InputStringProps } from "./InputString";

export default {
  title: "Input/InputString",
  component: InputString,
};

type InputStringTemplateProps = Omit<InputStringProps, 'value'> & { defaultValue?: string }

const Template = ({ defaultValue, ...args}: InputStringTemplateProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <InputString {...args} value={value} onChange={setValue} />
  )
};

export const String = Template.bind({});
String.args = {
  type: 'string',
  defaultValue: 'Foo bar',
  placeholder: 'Enter some value',
} as InputStringTemplateProps;

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  defaultValue: 'Foo bar',
  placeholder: 'Enter your password'
} as InputStringTemplateProps;

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  defaultValue: 'example@email.com',
  placeholder: 'Enter your email'
} as InputStringTemplateProps;

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'string',
  placeholder: 'Example placeholder'
} as InputStringTemplateProps;

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'string',
  defaultValue: 'Foo bar',
  placeholder: 'Enter some value',
  disabled: true,
} as InputStringTemplateProps;
