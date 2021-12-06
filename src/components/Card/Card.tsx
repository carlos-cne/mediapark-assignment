import React, { FC } from "react";
import DescriptionSection from "components/DescriptionSection/DescriptionSection";
import ImageSection from "components/ImageSection/ImageSection";
import UserInfoSection from "components/UserInfoSection/UserInfoSection";
import { PhotoProps } from "screens/Home/Home";

import * as S from "./styled";

type Props = {
  photo: PhotoProps;
};

const Card: FC<Props> = ({ photo }) => {
  return (
    <S.CardWrapper data-testid="custom-modal-element">
      <UserInfoSection
        profile_photo={photo.user.profile_photo}
        name={photo.user.name}
      />
      <ImageSection
        photo={photo.photo}
        alt_description={photo.alt_description}
        likes={photo.likes}
      />
      <DescriptionSection description={photo.description} />
    </S.CardWrapper>
  );
};

export default Card;
