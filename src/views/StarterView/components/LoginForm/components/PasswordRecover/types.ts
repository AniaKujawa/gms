import { Control, FieldError } from 'react-hook-form';

export type Props = {
  control: Control,
  emailErrors?: FieldError;
};
