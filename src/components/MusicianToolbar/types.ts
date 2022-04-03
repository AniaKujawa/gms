import { Musician } from "../../types";

export type Props = {
  setIsEditing: (editing: boolean) => void;
  musician: Musician;
};