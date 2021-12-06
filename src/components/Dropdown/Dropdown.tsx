import React, { FC } from "react";

import * as S from "./styled";

type Props = {
  suggestions: string[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown: FC<Props> = ({ suggestions, setSearchValue }) => {
  return (
    <S.DropdownWrapper>
      {suggestions?.map((suggestion) => (
        <S.Paragraph
          key={suggestion}
          onClick={() => setSearchValue(suggestion)}
        >
          {suggestion}
        </S.Paragraph>
      ))}
    </S.DropdownWrapper>
  );
};

export default Dropdown;
