import React, { useState } from "react";
import { InputSelect, InputSelectProps } from "./InputSelect";

export default {
  title: "Input/InputSelect",
  component: InputSelect,
};

type InputSelectTemplateProps = Omit<InputSelectProps, 'value'> & { defaultValue?: string }

const Template = ({ defaultValue, ...args}: InputSelectTemplateProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <InputSelect {...args} value={value} onChange={setValue} />
  )
};

export const Default = Template.bind({});
Default.args = {
  type: 'select',
  options: ['Foo', 'Bar', { label: 'Baz', value: 'baz' }],
} as InputSelectTemplateProps;

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'select',
  options: ['a', 'b', 'c'],
  placeholder: 'Example placeholder for empty value'
} as InputSelectTemplateProps;

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'select',
  options: ['Foo', 'Bar', { label: 'Baz', value: 'baz' }],
  defaultValue: 'Foo',
  disabled: true,
} as InputSelectTemplateProps;
