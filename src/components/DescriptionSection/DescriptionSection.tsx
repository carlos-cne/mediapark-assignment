import React, { FC } from "react";

import * as S from "./styled";

type Props = {
  description: string;
};

const DescriptionSection: FC<Props> = ({ description }) => {
  return (
    <S.DescriptionWrapper>
      {description ? (
        <>
          <S.BoldText>Description:</S.BoldText>
          {description}
        </>
      ) : (
        "No Description Available"
      )}
    </S.DescriptionWrapper>
  );
};

export default DescriptionSection;
