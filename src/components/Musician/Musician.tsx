"use client";
import React, { FC } from "react";
import { Typography, Grid } from "@material-ui/core";
import parse from "html-react-parser";

import { Slider } from "../Slider";
import { MusicianTags } from "./../MusicianTags";

import { Props } from "./types";
import { StyledDescription, StyledRoot, StyledSlider } from "./Musician.styles";

export const Musician: FC<Props> = ({ musician, children }) => {
  return (
    <StyledRoot>
      <Typography variant="h2">{musician.name}</Typography>
      {musician.images.length ? (
        <StyledSlider container>
          <Slider images={musician.images} />
        </StyledSlider>
      ) : null}
      <StyledDescription item md={6} lg={4}>
        <Typography variant="body1" component="div">
          {parse(musician.description || "")}
        </Typography>
      </StyledDescription>
      <MusicianTags tags={musician.tags} />
      {children}
    </StyledRoot>
  );
};
