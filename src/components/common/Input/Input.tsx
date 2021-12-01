import React, { FC, ReactNode } from "react";
import * as S from "./styled";

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  onChange: () => void;
  endIcon?: ReactNode;
};

const Input: FC<InputProps> = ({
  placeholder,
  name,
  type,
  onChange,
  endIcon
}) => {
  return (
    <S.InputWrapper data-testid="custom-input">
      <input
        name={name}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder}
      />
      {endIcon}
    </S.InputWrapper>
  );
};

export default Input;
