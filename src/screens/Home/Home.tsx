import AuthContext from "context/provider/AuthProvider";
import React, { useContext } from "react";

const Home = () => {
  const { handleRemoveToken } = useContext(AuthContext);

  return (
    <div>
      Home<button onClick={handleRemoveToken}>Logout</button>
    </div>
  );
};

export default Home;
