import { Tag } from "../../types";


export type SearchedTagsContextProps = {
  tags: Tag[];
  addTag: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
};
