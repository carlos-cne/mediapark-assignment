import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    width: 275px;
    height: 500px;
    margin-top: -75px;
  }
`;

export const Image = styled.img`
  height: 150px;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    height: 125px;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  height: 50px;
  padding-top: 18px;
  font-size: 14px;
  color: red;
`;

export const Div = styled.div`
  height: 50px;
`;
