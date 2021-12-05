import React, { FC } from "react";

import * as S from "./styled";

export type Props = {
  alt_description: string;
  likes: number;
  photo: string;
};

const ImageSection: FC<Props> = ({ photo, alt_description, likes }) => {
  return (
    <S.Wrapper>
      <S.Image loading="lazy" src={photo} alt={alt_description} />
      <S.Paragraph>
        {likes === 1 ? `${likes} like` : `${likes} likes`}
      </S.Paragraph>
    </S.Wrapper>
  );
};

export default ImageSection;
