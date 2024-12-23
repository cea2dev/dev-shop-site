import React from "react";
import { NavigationOption } from "@/navigation";
import * as Styled from "./styles";

export type NavbarItemProps = {
  option: NavigationOption;
  isTopOfPage: boolean;
};

export const NavbarItem = ({ option, isTopOfPage }: NavbarItemProps) => {
  return (
    <Styled.NavbarItem data-testid="navbar-item" isTopOfPage={isTopOfPage}>
      <Styled.NavbarLink to={option.route} isTopOfPage={isTopOfPage}>
        {option.title}
      </Styled.NavbarLink>
    </Styled.NavbarItem>
  );
};
