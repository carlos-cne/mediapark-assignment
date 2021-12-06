import React, { FC } from "react";

import * as S from "./styled";

type Props = {
  suggestions: string[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
};

const Dropdown: FC<Props> = ({
  suggestions,
  setSearchValue,
  setSuggestions
}) => {
  const handleClick = (value: string) => {
    setSearchValue(value);
    setSuggestions([]);
  };
  return (
    <S.DropdownWrapper>
      {suggestions?.map((suggestion) => (
        <S.Paragraph key={suggestion} onClick={() => handleClick(suggestion)}>
          {suggestion}
        </S.Paragraph>
      ))}
    </S.DropdownWrapper>
  );
};

export default Dropdown;
