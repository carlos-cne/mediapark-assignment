import React, { FC, ReactNode } from "react";
import * as S from "./styled";

enum Colors {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  light = "light"
}

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
  label: string;
  color: Colors;
};

const backgroundColor: Record<Colors, string> = {
  primary: "#314BCE",
  secondary: "#FF897E",
  gray: "#AAADB7",
  light: "#F5F6FA"
};

const Button: FC<ButtonProps> = ({ children, onClick, label, color }) => {
  return (
    <S.Button onClick={onClick} color={backgroundColor[color]}>
      {children}
      {label}
    </S.Button>
  );
};

export default Button;
