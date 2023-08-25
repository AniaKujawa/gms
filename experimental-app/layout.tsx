"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

export const metadata = {
  title: "Skrzypiec",
  description: "Connecting platform for musicians and business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}