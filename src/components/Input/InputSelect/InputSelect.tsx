import React, {useMemo} from 'react';
import {OnChangeFunction, Option} from "../types";
import {getClassName, getLongOption} from "../utils";
import clsx from "clsx";

type Props<N extends string = string> = {
  name?: N,
  className?: string,
  value?: string | null,
  placeholder?: string,
  disabled?: boolean,
  options: Option[],
  onChange?: OnChangeFunction<string>,
}

export interface InputSelectProps<N extends string = string> extends Props<N> { type: 'select' }

export const InputSelect: React.FC<Props> = (props) => {
  const {
    name,
    className,
    value = null,
    placeholder = '...',
    disabled = false,
    options: dataOptions,
    onChange,
  } = props;

  const options = useMemo(() => {
    return [
      { value: '', label: placeholder },
      ...dataOptions.map(getLongOption)
    ];
  }, [placeholder, dataOptions]);

  return (
    <select
      name={name}
      className={clsx(getClassName('select'), className)}
      value={value || 'null'}
      disabled={disabled}
      onChange={(e) => {
        const value = e.target.value || undefined;
        onChange?.(value);
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}