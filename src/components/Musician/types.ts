import { ReactNode } from "react";
import { Musician } from "../../types";

export type Props = {
  musician: Musician;
  children?: ReactNode;
};
