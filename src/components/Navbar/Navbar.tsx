import React, { FC } from "react";
import Logo from "assets/logo.svg";

import * as S from "./styled";
import Button from "components/Button/Button";

type Props = {
  onClick: () => void;
};

const Navbar: FC<Props> = ({ onClick }) => {
  return (
    <S.Wrapper>
      <S.Image src={Logo} alt="Unplash black logo on left side" />
      <Button onClick={onClick} color="secondary">
        Log out
      </Button>
    </S.Wrapper>
  );
};

export default Navbar;
