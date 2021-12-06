import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Paragraph = styled.p`
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 15px 10px;
  font-size: 12px;
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;

export const LikeImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 15px 10px;
  cursor: pointer;
`;
