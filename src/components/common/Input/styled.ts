import styled from "styled-components";

export const InputWrapper = styled.div`
  background-color: #f5f6fa;
  color: #151940;
  height: 54px;
  border-radius: 8px;
  min-width: 330px;
  width: 100%;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;

    ::placeholder {
      color: #7f8192;
    }
  }

  :focus {
    border: 1px solid #314bce;
    background-color: #314bce08;
    color: #314bce;
  }
`;
