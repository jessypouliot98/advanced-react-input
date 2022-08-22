import React, { useState } from "react";
import { InputBoolean, InputBooleanProps } from "./InputBoolean";

export default {
  title: "Input/InputBoolean",
  component: InputBoolean,
};

type InputBooleanTemplateProps = Omit<InputBooleanProps, 'value'> & { defaultValue?: boolean }

const Template = ({ defaultValue, ...args}: InputBooleanTemplateProps) => {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  return (
    <InputBoolean {...args} value={value} onChange={setValue as any} />
  )
};

export const Default = Template.bind({});
Default.args = {
  type: 'boolean',
  defaultValue: true,
} as InputBooleanTemplateProps;

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'boolean',
  defaultValue: true,
  disabled: true,
} as InputBooleanTemplateProps;
