import { Musician } from '../../types';

export type Props = {
  musician?: Musician;
  endEditing: () => void;
};

export type FormProps = {
  musician?: Musician;
  onSubmit: (values: any) => void;
  handleCancel: () => void;
};
