import React from "react";
import { InputFile, InputFileProps } from "./InputFile";

export default {
  title: "Input/InputFile",
  component: InputFile,
};

const Template = (args: InputFileProps) => <InputFile {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'file',
} as InputFileProps;
