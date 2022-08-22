import { Option } from './types';
import clsx from "clsx";

export const getLongOption = (option: Option) => {
  if (typeof option === 'string') {
    return { value: option, label: option };
  }

  return { value: option.value, label: option.label || option.value }
}

export const getClassName = (type: string, subType?: string) => {
  return clsx('ari-input', `ari-input-${type}`, subType && `ari-input-${subType}`);
}