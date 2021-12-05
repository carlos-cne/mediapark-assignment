import React, { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { theme } from "styles/theme";
import { AuthProvider } from "./AuthProvider";

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};
