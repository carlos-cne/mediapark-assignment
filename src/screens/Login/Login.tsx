import React, { useState } from "react";
import Input from "components/common/Input/Input";
import Logo from "assets/logo.svg";
import Button from "components/common/Button/Button";

import * as S from "./styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (email === "" && password === "") {
      setErrorMessage("Email and password are Required");
    } else if (password === "") {
      setErrorMessage("Password is Required");
    } else if (email === "") {
      setErrorMessage("Email is Required");
    }
    const url = new URL(
      `${process.env.REACT_APP_AUTH_URL}?client_id=${process.env.REACT_APP_ACCESS_KEY}&redirect_uri=${process.env.REACT_APP_BASE_URL}&response_type=code&scope=public`
    );
    window.open(url, "_self");
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
          onChange={(e) => handleEmail(e)}
        />
        <Input
          margin="20px 0 50px 0px"
          value={password}
          name="password"
          placeholder="Password"
          onChange={(e) => handlePassword(e)}
        />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <Button onClick={handleLogin} color="primary" label="Log in" />
      </S.LoginContainer>
    </S.Wrapper>
  );
};

export default Login;
