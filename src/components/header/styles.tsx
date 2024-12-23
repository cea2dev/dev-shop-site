import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header<{ isTopOfPage: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${(props) => props.isTopOfPage ? props.theme.palette.backgroundDark : props.theme.palette.backgroundLight};
  transition: background-color 0.4s ease-out;
`;

export const Logo = styled(NavLink)`
  padding-left: ${(props) => props.theme.spacing.medium};
`;
