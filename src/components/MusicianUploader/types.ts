import { Musician } from '../../types';
import { Image, File } from './../MultipleUploader/types';

export type Props = {
  musician?: Musician;
  values: Image[];
  setValues: (values: File[]) => void;
};

export type ModalProps = {
  isModalOpen: boolean;
  handleClose: () => void;
  handleDelete: () => void;
};