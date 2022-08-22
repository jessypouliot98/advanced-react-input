import React from "react";
import { Input } from "../Input";
import { Label, LabelProps } from "./Label";

export default {
  title: 'Label/Label',
  component: Label,
}

type LabelTemplateProps = LabelProps;

const Template = (args: LabelTemplateProps) => <Label {...args} />

export const Default = Template.bind({});
Default.args = {
  children: 'Input Label'
} as LabelTemplateProps;

export const WithInput = Template.bind({});
WithInput.args = {
  children: (
    <>
      <div>Input Label</div>
      <div>
        <Input type={'string'} value={'Foo bar'} />
      </div>
    </>
  )
} as LabelTemplateProps;