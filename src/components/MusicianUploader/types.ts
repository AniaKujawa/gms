import { Musician } from '../../types';
import { ImageFile } from './../MultipleUploader/types';

export type Props = {
  musician?: Musician;
  values: ImageFile[];
  setValues: (values: ImageFile[]) => void;
};

export type ModalProps = {
  isModalOpen: boolean;
  handleClose: () => void;
  handleDelete: () => void;
};