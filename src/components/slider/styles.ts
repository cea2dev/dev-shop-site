import styled from "styled-components";

export const Slider = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  margin: auto 0;
  flex-basis: 70%;
  padding: 32px;
  // overflow: hidden;
`;
export const Header = styled.h2`
  text-align: center;
  margin: 1.5rem 0;
  font-size: 2rem;
  color: ${(props) => props.theme.palette.textLight};
`;
