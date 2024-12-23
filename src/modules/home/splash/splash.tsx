import React from "react";
import { useHideSplashScreen } from "@/hooks/splash";
import { Logo } from "@/components/logo";
import * as Styled from "./styles";

export const HomeSplash = () => {
  const hideSplash = useHideSplashScreen(4000);

  return (
    <Styled.Splash hideSplash={hideSplash} data-testid="splash">
      <Styled.Logo>
        <Logo />
      </Styled.Logo>
    </Styled.Splash>
  );
};
