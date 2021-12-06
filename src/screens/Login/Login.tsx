import React, { useContext, useEffect, useState } from "react";
import Input from "components/Input/Input";
import Logo from "assets/logo.svg";
import Button from "components/Button/Button";
import AuthContext from "context/provider/AuthProvider";

import * as S from "./styled";
import { useLocation, useNavigate } from "react-router";
import api from "services/api";

type ErrorProps = {
  error: string;
  error_description: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, code] = location.search.split("=");
  const { token, handleSetToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (code) {
      handleGetToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleLogin = () => {
    if (email === "" && password === "") {
      return setErrorMessage("Email and password are Required");
    } else if (password === "") {
      return setErrorMessage("Password is Required");
    } else if (email === "") {
      return setErrorMessage("Email is Required");
    }
    const url = new URL(
      `${process.env.REACT_APP_AUTH_URL}?client_id=${process.env.REACT_APP_ACCESS_KEY}&redirect_uri=${process.env.REACT_APP_BASE_URL}login&response_type=code&scope=public`
    );
    window.open(url, "_self");
  };

  const handleGetToken = async () => {
    try {
      setLoading(true);
      const { data } = await api.post(
        `https://unsplash.com/oauth/token?client_id=${process.env.REACT_APP_ACCESS_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}&redirect_uri=${process.env.REACT_APP_BASE_URL}login&code=${code}&grant_type=authorization_code`
      );

      if (data) {
        handleSetToken(data.access_token);
      }
    } catch (error) {
      const newError = error as unknown as ErrorProps;
      setErrorMessage(newError.error_description);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Wrapper>
      <S.LoginContainer>
        <S.Image src={Logo} alt="Unsplash Logo" />
        <Input
          margin="20px 0"
          value={email}
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => handleEmail(e)}
        />
        <Input
          margin="20px 0 0px 0px"
          value={password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handlePassword(e)}
        />
        {errorMessage ? (
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        ) : (
          <S.Div />
        )}
        <Button onClick={handleLogin} color="primary">
          {loading ? <p>Loading...</p> : "Log in"}
        </Button>
      </S.LoginContainer>
    </S.Wrapper>
  );
};

export default Login;
