import { Musician } from '../../types';

export type Props = {
  musician: Musician;
};

export type FormProps = {
  musician?: Musician;
  onSubmit: (values: any) => void;
  handleCancel: () => void;
};
