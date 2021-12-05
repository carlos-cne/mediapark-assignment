import React, { FC, ReactNode } from "react";
import * as S from "./styled";

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  color: "primary" | "gray" | "light" | "secondary";
};

const backgroundColor: Record<string, string> = {
  primary: "#314BCE",
  secondary: "#FF897E",
  gray: "#AAADB7",
  light: "#F5F6FA"
};

const Button: FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <S.Button onClick={onClick} color={backgroundColor[color]}>
      {children}
    </S.Button>
  );
};

export default Button;
