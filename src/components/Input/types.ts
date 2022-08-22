export type OptionShort = string;
export type OptionLong = {
  value: string,
  label?: string,
};
export type Option = OptionShort | OptionLong;

export type OnChangeFunction<V = unknown> = (value?: V) => void;