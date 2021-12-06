import React, { FC } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Dropdown from "components/Dropdown/Dropdown";

import * as S from "./styled";

type Props = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errorMessage?: boolean;
  suggestions: string[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Search: FC<Props> = ({
  onClick,
  onChange,
  value,
  errorMessage,
  suggestions,
  setSearchValue
}) => {
  return (
    <>
      <S.SearchWrapper>
        <S.Container>
          <Input
            value={value}
            name="search"
            placeholder="Searching..."
            onChange={onChange}
            margin="0 20px 0px 0px"
          />
          <Dropdown suggestions={suggestions} setSearchValue={setSearchValue} />
        </S.Container>
        <Button onClick={onClick} color="primary">
          Submit
        </Button>
      </S.SearchWrapper>
      {errorMessage ? (
        <p style={{ textAlign: "center" }}>Invalid value</p>
      ) : null}
    </>
  );
};

export default Search;
