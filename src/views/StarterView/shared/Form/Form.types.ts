import { RegisterFormProps } from '../../components/RegisterForm/types';
import { DeepMap, Control, FieldError } from 'react-hook-form';
import { LoginFormProps } from '../../components/LoginForm/types';

type FormProps = RegisterFormProps | LoginFormProps

export type Props = {
  control: Control<FormProps>;
  errors: DeepMap<FormProps, FieldError>
};
