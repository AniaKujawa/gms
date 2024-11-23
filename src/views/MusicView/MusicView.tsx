"use client";
import { Container } from "@mui/material";
import React from "react";

import { MusicianGuestView } from "../../components";
import { Musician } from "../../types";

type Props = {
  musician: Musician;
};

export const MusicView = ({ musician }: Props) => {
  return (
    <Container maxWidth="lg">
      {musician ? (
        <MusicianGuestView musician={musician} />
      ) : (
        <h2>Przykro nam, nie mamy dostępu do muzyka o tym id</h2>
      )}
    </Container>
  );
};
