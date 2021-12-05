import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 30px 100px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;

  @media (max-width: 800px) {
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
