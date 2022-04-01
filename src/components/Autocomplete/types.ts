export interface Option {
  inputValue?: string;
  name: string;
};

export type Options = Option[];

export type Props = {
  onChange: (options: Options) => void;
  value: Options;
  options: Options;
};
