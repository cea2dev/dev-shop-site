import React from "react";
import { NavbarItem } from "./item";
import { NavigationOption } from "@/navigation";
import * as Styled from "./styles";

export type NavbarProps = {
  options: NavigationOption[];
  isTopOfPage: boolean;
};

export const Navbar = ({ options, isTopOfPage }: NavbarProps) => {
  return (
    <Styled.Navbar data-testid="navbar">
      {options.map((opt, i) => (
        <NavbarItem key={i} option={opt} isTopOfPage={isTopOfPage} />
      ))}
    </Styled.Navbar>
  );
};
