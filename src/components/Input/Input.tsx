import React, { FC } from "react";
import * as S from "./styled";

type InputProps = {
  placeholder: string;
  name: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  margin?: string;
};

const Input: FC<InputProps> = ({
  placeholder,
  name,
  type,
  onChange,
  value,
  margin
}) => {
  return (
    <S.InputWrapper data-testid="custom-input" margin={margin}>
      <S.Input
        autoComplete="off"
        name={name}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </S.InputWrapper>
  );
};

export default Input;
