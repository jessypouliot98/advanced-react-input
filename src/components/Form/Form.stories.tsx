import React from "react";
import { Input } from "../Input";
import { Label } from "../Label/Label";
import { Form, FormProps } from "./Form";

export default {
  title: "Form/Form",
  component: Form,
};

type FormData = {
  name: string,
  email: string,
  phone: string,
  password: string,
  acceptedTos: boolean,
}

type FromTemplateProps = Omit<FormProps<FormData>, 'children'>;

const Template = (args: FromTemplateProps) => {
  return (
    <Form<FormData> {...args}>
      {({ values, getInputPropsByName: gp, handleSubmit }) => (
        <div>
          <h1>Example form</h1>
          <div>
            <Input type={'string'} placeholder={'Enter your name'} {...gp('name')} />
          </div>
          <div>
            <Input type={'email'} placeholder={'Enter your email'} disabled={!values.name} {...gp('email')} />
          </div>
          <div>
            <Input type={'string'} placeholder={'Enter your phone'} disabled={!values.email} {...gp('phone')} />
          </div>
          <div>
            <Input type={'password'} placeholder={'Enter your password'} disabled={!values.phone} {...gp('password')} />
          </div>
          <Label>
            <span>I accept terms of service.. </span>
            <Input type={'boolean'} disabled={!values.password} {...gp('acceptedTos')} />
          </Label>
          <div>
            <button type={'button'} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </Form>
  )
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: (values) => alert(JSON.stringify(values)),
} as FromTemplateProps;

export const WithDefaultValues = Template.bind({});
WithDefaultValues.args = {
  defaultValues: {
    name: 'Foo Bar',
    email: 'email@domain.com',
    phone: '123 123 1234',
    password: 'password123',
    acceptedTos: true,
  },
  onSubmit: (values) => alert(JSON.stringify(values)),
} as FromTemplateProps;