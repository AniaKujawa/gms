import { ReactNode } from 'react';

export type Props = {
  open: boolean;
  handleClose: () => void;
  title: string | ReactNode;
  description?: string | ReactNode;
};
