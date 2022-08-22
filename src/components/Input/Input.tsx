import React from 'react';
import {InputString, InputStringProps} from "./InputString/InputString";
import {InputFile, InputFileProps} from "./InputFile/InputFile";
import {InputSelect, InputSelectProps} from "./InputSelect/InputSelect";
import {InputBoolean, InputBooleanProps} from "./InputBoolean/InputBoolean";

export type InputProps =
  | InputStringProps
  | InputSelectProps
  | InputBooleanProps
  | InputFileProps;

export const Input: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case 'string':
    case 'password':
    case 'email': {
      return <InputString {...props} />
    }
    case 'select': {
      return <InputSelect {...props} />;
    }
    case 'boolean': {
      return <InputBoolean {...props} />;
    }
    case 'file': {
      return <InputFile {...props} />;
    }
    default:
      console.warn(`"${(props as any).type}" is not a valid <Input/> type`)
      return null;
  }
}