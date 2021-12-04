import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "services/api";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const locations = useLocation();
  const [, code] = locations.search.split("=");

  const handleLogin = useCallback(async () => {
    setLoading(true);
    try {
      const res = api.post(
        `https://unsplash.com/oauth/token?client_id=${process.env.REACT_APP_ACCESS_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}&redirect_uri=${process.env.REACT_APP_BASE_URL}&code=${code}&grant_type=authorization_code`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [code]);

  useEffect(() => {
    if (code) {
      handleLogin();
    }
  }, [code, handleLogin]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Loading...
      </div>
    );
  }

  return <div>Home</div>;
};

export default Home;
