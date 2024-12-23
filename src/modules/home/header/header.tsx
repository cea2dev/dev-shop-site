import React, {  useState } from "react";
import { useScrollPosition } from "@/hooks/scroll";
import * as Styled from "./styles";

export interface HomeHeaderProps {
  isSplashComplete: boolean;
}

export const HomeHeader = ({ isSplashComplete }: HomeHeaderProps) => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const checkTopOfPage = ({
    currPos,
  }: {
    prevPos: { x: number; y: number };
    currPos: { x: number; y: number };
  }): void => {
    setIsTopOfPage(currPos.y < 15);
  };

  useScrollPosition(checkTopOfPage, null, true, null, []);

  return (
    <Styled.Background data-testid="home-header">
      <Styled.One isSplashComplete={isSplashComplete} isTopOfPage={isTopOfPage}>Building software.</Styled.One>
      <Styled.Two isSplashComplete={isSplashComplete} isTopOfPage={isTopOfPage}>From dusk til dawn.</Styled.Two>
    </Styled.Background>
  );
};
