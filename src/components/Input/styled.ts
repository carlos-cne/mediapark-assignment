import styled from "styled-components";

type InputWrapperProps = {
  margin?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  background-color: #f5f6fa;
  color: #151940;
  height: 54px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin: ${({ margin }) => margin};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 2px solid #f5f6fa;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  ::placeholder {
    color: #7f8192;
    font-weight: 500;
  }

  :focus {
    border: 2px solid #314bce;
    background-color: #314bce08;
    border-radius: 8px;
  }
`;
