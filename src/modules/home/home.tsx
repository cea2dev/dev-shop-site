import React, { useContext } from "react";
import { HomeHeader } from "./header";
import { KeyFeatureList } from "./key-feature";
import { HomeSplash } from "./splash";
import { SplashContext, SplashState } from "@/components/splash-provider";
import * as Styled from "./styles";
import { Slider } from "@/components/slider";

export const Home = () => {
  const [isSplashComplete] = useContext(SplashContext) as SplashState;

  return (
    <div data-testid="home">
      <HomeSplash />
      <Styled.Home>
        <HomeHeader isSplashComplete={isSplashComplete} />
        <Styled.TwilightBackground isSplashComplete={isSplashComplete}>
          <Slider title="See what we've been up to."/>
          <Styled.MileenaBackground />
          {/* <Styled.KeyFeatureListContainer>
            <KeyFeatureList />
          </Styled.KeyFeatureListContainer> */}
        </Styled.TwilightBackground>
      </Styled.Home>
    </div>
  );
};
