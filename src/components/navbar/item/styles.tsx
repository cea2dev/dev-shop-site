import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarItem = styled.div<{ isTopOfPage: boolean }>`
  padding: 0 ${(props) => props.theme.spacing.large};
  :first-child {
    border-right: solid 1px
      ${(props) =>
        props.isTopOfPage
          ? props.theme.palette.accentLight
          : props.theme.palette.accentDark};
  }

  :last-child {
    border-left: solid 1px
      ${(props) =>
        props.isTopOfPage
          ? props.theme.palette.accentLight
          : props.theme.palette.accentDark};
  }
`;

export const NavbarLink = styled(Link)<{ isTopOfPage: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.isTopOfPage
      ? props.theme.palette.accentLight
      : props.theme.palette.accentDark};
  transition: color 0.4s ease-out;
  font-size: 20px;
  :hover,
  :active {
    color: ${(props) => props.theme.palette.textLight};
  }
`;
