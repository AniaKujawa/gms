export type Image = {
  id: string;
  url: string;
  saved?: boolean;
}

export type File = Image | { id: string; url: Blob };

export type Props = {
  values: Image[];
  setValues: (values: File[]) => void;
  handleServerDelete: (image: Image) => void;
};
