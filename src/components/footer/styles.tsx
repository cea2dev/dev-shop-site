import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 75px;
  background: ${(props) => props.theme.palette.backgroundLight};
  color: ${(props) => props.theme.palette.textDark};
  font-size: .75rem;
  padding: 0 20px;
`;
