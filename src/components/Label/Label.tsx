import React from "react";

export type LabelProps = {
  htmlFor?: string,
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}