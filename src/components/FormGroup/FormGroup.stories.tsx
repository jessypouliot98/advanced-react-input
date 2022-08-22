import React from "react";
import { Input } from "../Input";
import { FormGroup, FormGroupProps } from "./FormGroup";

export default {
  title: 'FormGroup/FormGroup',
  component: FormGroup,
}

const Template = (args: FormGroupProps) => (
  <FormGroup {...args}>
    <Input type={'string'} value={'Foo bar'} />
  </FormGroup>
);

export const Default = Template.bind({});