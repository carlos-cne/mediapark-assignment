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
  font-weight: 500;
  text-transform: capitalize;
`;
