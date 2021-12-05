import React, { FC, ReactNode } from "react";
import * as S from "./styled";

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return (
    <S.CardWrapper data-testid="custom-modal-element">{children}</S.CardWrapper>
  );
};

export default Card;
