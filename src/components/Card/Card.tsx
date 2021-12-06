import React, { FC } from "react";
import DescriptionSection from "components/DescriptionSection/DescriptionSection";
import ImageSection from "components/ImageSection/ImageSection";
import UserInfoSection from "components/UserInfoSection/UserInfoSection";
import { PhotoProps } from "screens/Home/Home";

import * as S from "./styled";

type Props = {
  photo: PhotoProps;
  liked: string[];
  handleLiked: (photo_id: string) => Promise<void> | (() => void);
};

const Card: FC<Props> = ({ photo, liked, handleLiked }) => {
  return (
    <S.CardWrapper data-testid="custom-modal-element">
      <UserInfoSection
        profile_photo={photo.user.profile_photo}
        name={photo.user.name}
      />
      <ImageSection liked={liked} photo={photo} handleLiked={handleLiked} />
      <DescriptionSection description={photo.description} />
    </S.CardWrapper>
  );
};

export default Card;
