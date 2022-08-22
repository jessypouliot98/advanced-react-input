import React from 'react';

export type FormGroupProps = {

}

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}