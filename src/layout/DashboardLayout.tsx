"use client";

import React, { FC, ReactNode } from "react";
import { Header } from "../components";
import { StyledContainer, StyledContent } from "./DashboardLayout.styles";

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => (
  <StyledContainer>
    <Header />
    <StyledContent>{children}</StyledContent>
  </StyledContainer>
);
