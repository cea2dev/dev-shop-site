import React, { useState } from "react";
import Logo from "@/assets/images/twilight-logo-white.png";
import * as Styled from "./styles";
import { Navbar } from "../navbar";
import { defaultOptions } from "@/navigation/default";
import { useScrollPosition } from "@/hooks/scroll";


export const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const checkTopPage = ({
    currPos,
  }: {
    prevPos: { x: number; y: number };
    currPos: { x: number; y: number };
  }): void => {
    setIsTopOfPage(currPos.y < 10);
  };

  useScrollPosition(checkTopPage, null, true, null, []);

  return (
    <Styled.Header isTopOfPage={isTopOfPage} data-testid="header">
      <Styled.Logo to="/" exact={true}>
        <img alt="Twilight Logo" src={Logo} />
      </Styled.Logo>
      <Navbar options={defaultOptions} isTopOfPage={isTopOfPage}></Navbar>
    </Styled.Header>
  );
};
