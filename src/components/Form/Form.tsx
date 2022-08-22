import React, {useCallback, useState} from 'react';
import {OnChangeFunction} from "../Input/types";

export type InputValueProps<F extends {} = any> = {
  value: any,
  name: keyof F extends string ? keyof F : string,
  onChange: OnChangeFunction,
}
export type FormRenderableParams<F extends {} = any> = {
  values: Partial<F>,
  setValue: <V = F[keyof F]>(value: V | undefined, name: keyof F) => void,
  handleSubmit: () => void,
  getInputPropsByName: (name: keyof F) => InputValueProps<F>,
};
export type FormRenderable<F extends {} = any> = (params: FormRenderableParams<F>) => React.ReactNode;
export type FormProps<F extends {} = any> = {
  children: FormRenderable<F>,
  className?: string,
  defaultValues?: Partial<F>,
  onSubmit: (data: Partial<F>) => void,
}

export const Form = <F extends Record<string, any> = any>(props: FormProps<F>) => {
  const {
    children: renderContent,
    className,
    defaultValues,
    onSubmit,
  } = props;
  const [values, setValues] = useState<Partial<F>>(defaultValues || {});

  const handleSubmit = useCallback((e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    onSubmit(values);
  }, [values, onSubmit]);

  const handleSetValue: FormRenderableParams['setValue'] = (value, name) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {renderContent({
        values: values,
        setValue: handleSetValue,
        handleSubmit: handleSubmit,
        getInputPropsByName: (name) => ({
          name: name as any,
          value: values[name],
          onChange: (v) => handleSetValue(v, name),
        }),
      })}
    </form>
  )
}