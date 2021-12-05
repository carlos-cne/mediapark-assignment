import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import AuthContext from "context/provider/AuthProvider";
import React, { useContext, useState } from "react";

import * as S from "./styled";

const Home = () => {
  const { handleRemoveToken } = useContext(AuthContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSubmitSearch = () => {};

  return (
    <main>
      <Navbar onClick={handleRemoveToken} />
      <S.Div>
        <Search
          onChange={(e) => handleSearchValue(e)}
          onClick={handleSubmitSearch}
          value={searchValue}
        />
      </S.Div>
    </main>
  );
};

export default Home;
