import React from 'react';
import {OnChangeFunction} from "../types";
import {getClassName} from "../utils";
import clsx from "clsx";

type Props<N extends string = string> = {
  name?: N,
  className?: string,
  value?: boolean,
  disabled?: boolean,
  onChange?: OnChangeFunction<boolean>,
}

export interface InputBooleanProps<N extends string = string> extends Props<N> { type: 'boolean' }

export const InputBoolean: React.FC<Props> = (props) => {
  const {
    name,
    className,
    value,
    disabled,
    onChange,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    
    const nextValue = e.target.checked || false;
    onChange?.(nextValue);
  }

  return (
    <input
      type={'checkbox'}
      name={name}
      className={clsx(getClassName('boolean'), className)}
      checked={value || false}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}