import React, { FC } from "react";
import Like from "assets/icons-like.png";
import Liked from "assets/icons-liked.png";

import * as S from "./styled";
import { PhotoProps } from "screens/Home/Home";

export type Props = {
  liked: string[];
  photo: PhotoProps;
  handleLiked: (photo_id: string) => Promise<void> | (() => void);
};

const ImageSection: FC<Props> = ({ photo, liked, handleLiked }) => {
  return (
    <S.Wrapper>
      <S.Image loading="lazy" src={photo.photo} alt={photo.alt_description} />
      <S.Paragraph>
        {photo.likes === 1 ? `${photo.likes} like` : `${photo.likes} likes`}
      </S.Paragraph>
      <S.LikeImage
        onClick={() => handleLiked(photo.id)}
        loading="lazy"
        src={!liked.includes(photo.id) ? Like : Liked}
        alt={Like}
      />
    </S.Wrapper>
  );
};

export default ImageSection;
