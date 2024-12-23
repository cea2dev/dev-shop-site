import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 24px;
  margin: 8px;
`;

export const Bullet = styled.a`
  margin: 0 8px;
  padding: 0 12px;
  background: ${(props) => props.theme.palette.accentLight};
  border-radius: 50%;

  transition: background 0.4s;

  :hover,
   active {
    background: ${(props) => props.theme.palette.textLight};
  }
`;
