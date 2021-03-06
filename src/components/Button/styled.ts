import styled from "styled-components";

export type ButtonColorProps = {
  color: string;
};

export const Button = styled.button<ButtonColorProps>`
  background-color: ${({ color }) => color};
  height: 56px;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  text-transform: capitalize;
  outline: none;
  border: none;
  transition: opacity 0.1s ease-in;
  min-width: 128px;

  :hover {
    opacity: 0.9;
  }

  @media (max-width: 800px) {
    height: 48px;
  }
`;
