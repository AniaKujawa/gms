import { Image } from '../MultipleUploader/types';

export type Props = {
  image: Image;
  handleDelete: (image: Image) => void;
};
