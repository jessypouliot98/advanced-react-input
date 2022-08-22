import React from 'react';
import {OnChangeFunction} from "../types";
import {getClassName} from "../utils";
import clsx from "clsx";

type Props<N extends string = string> = {
  name?: N,
  className: string,
  disabled?: boolean,
  onChange?: OnChangeFunction<File>,
}

export interface InputFileProps<N extends string = string> extends Props<N> { type: 'file' }

export const InputFile: React.FC<Props> = (props) => {
  const {
    name,
    className,
    disabled = false,
    onChange,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || undefined;
    onChange?.(file);
  }

  return (
    <input
      type="file"
      name={name}
      className={clsx(getClassName('file'), className)}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}