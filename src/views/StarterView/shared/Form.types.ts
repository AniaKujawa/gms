import { RegisterFormProps } from '../components/RegisterForm/types';
import { DeepMap, Control, FieldError } from 'react-hook-form';

type FormProps = RegisterFormProps

export type Props = {
  control: Control<FormProps>;
  errors: DeepMap<RegisterFormProps, FieldError>
};
