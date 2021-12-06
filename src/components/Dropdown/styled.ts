import styled from "styled-components";

export const DropdownWrapper = styled.div`
  background-color: #f5f6fa;
  color: #151940;
  margin-top: 5px;
  position: absolute;
  width: 100%;
  z-index: 999;
  border-radius: 4px;
`;

export const Paragraph = styled.div`
  padding: 10px 20px;
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background-color: #151940;
    color: #f5f6fa;
    border-radius: 4px;
  }
`;
