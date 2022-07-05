export type Image = {
  id: string;
  url: string;
}

export type ImageFile = { id: string; url: Blob };

export type Props = {
  values: ImageFile[];
  setValues: (values: ImageFile[]) => void;
};
