import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 220px;
  height: 1.2em;
  white-space: nowrap;
  padding: 20px 10px 20px 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-right: 5px;
`;
