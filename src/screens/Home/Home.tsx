import Navbar from "components/Navbar/Navbar";
import AuthContext from "context/provider/AuthProvider";
import React, { useContext } from "react";

const Home = () => {
  const { handleRemoveToken } = useContext(AuthContext);

  return (
    <main>
      <Navbar onClick={handleRemoveToken} />
    </main>
  );
};

export default Home;
