export interface Option {
  inputValue?: string;
  title: string;
};

export type Options = Option[];

export type Props = {
  onChange: (options: Options) => void;
  value: Options;
  options: Options;
};
