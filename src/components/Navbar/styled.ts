import styled from "styled-components";

export const Wrapper = styled.nav`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 72px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 0 20px 0 30px;
  }
`;

export const Image = styled.img`
  height: 35px;
`;
