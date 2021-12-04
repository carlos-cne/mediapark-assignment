import styled from "styled-components";

export type ButtonColorProps = {
  color: string;
};

export const Button = styled.button<ButtonColorProps>`
  background-color: ${({ color }) => color};
  min-width: 330px;
  height: 56px;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  text-transform: capitalize;
  outline: none;
  border: none;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.9;
  }
`;
