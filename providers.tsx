"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./src/styles/theme";
import { SessionProvider } from "next-auth/react";
import { FeedbackContextProvider } from "./src/context/Feedback";
import { FeedbackAlert } from "./src/shared/components/Feedback";
import QueryProvider from "./queryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <QueryProvider>
          {/* <UserContextProvider> */}
          <FeedbackContextProvider>
            <CssBaseline />
            {children}
            <FeedbackAlert />
          </FeedbackContextProvider>
          {/* </UserContextProvider> */}
        </QueryProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
