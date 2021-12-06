import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  height: 56px;
  max-width: 600px;
  margin: 20px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    height: 48px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-right: 5px;
`;
