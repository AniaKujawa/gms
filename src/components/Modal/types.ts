import { ReactNode } from 'react';

export type Props = {
  open: boolean;
  handleClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};
