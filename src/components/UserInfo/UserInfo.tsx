import React, { FC } from "react";
import { UserProps } from "screens/Home/Home";

import * as S from "./styled";

const UserInfo: FC<UserProps> = ({ profile_photo, name }) => {
  return (
    <S.UserInfoWrapper>
      <S.Image loading="lazy" src={profile_photo} alt={name} />
      <S.Paragraph>{name}</S.Paragraph>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
