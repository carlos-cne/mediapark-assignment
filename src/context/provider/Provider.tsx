import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { theme } from "styles/theme";

type Props = {
  children?: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
