import React from 'react';
import {getType} from "./utils";
import {OnChangeFunction} from "../types";
import {getClassName} from "../utils";
import clsx from "clsx";

type StringType = 'string' | 'password' | 'email';

type Props<N extends string = string> = {
  type?: StringType,
  className?: string,
  name?: N,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  onChange?: OnChangeFunction<string>,
}

export interface InputStringProps<N extends string = string> extends Props<N> { type: StringType }

export const InputString: React.FC<Props> = (props) => {
  const {
    type,
    className,
    name,
    value,
    placeholder,
    disabled = false,
    onChange,
  } = props;
  const inputType = getType(type);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value || undefined;
    onChange?.(nextValue);
  }

  return (
    <input
      type={inputType}
      name={name}
      className={clsx(getClassName('text', type), className)}
      value={value || ''}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}