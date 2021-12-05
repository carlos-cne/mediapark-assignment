import React, { FC } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import * as S from "./styled";

type Props = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errorMessage?: boolean;
};

const Search: FC<Props> = ({ onClick, onChange, value, errorMessage }) => {
  return (
    <>
      <S.SearchWrapper>
        <Input
          value={value}
          name="search"
          placeholder="Searching..."
          onChange={onChange}
          margin="0 20px"
        />
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
