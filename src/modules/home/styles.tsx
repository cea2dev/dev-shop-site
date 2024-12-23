import TwilightBg from "@/assets/images/twilight-bg2.jpg";
import MileenaBg from "@/assets/images/mileena-portrait.png";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeInAnimation = css`
  ${fadeIn} 3s linear 2.5s forwards
`;

export const Home = styled.div`
  // display: flex;
  // flex: 1;
  // flex-direction: column;
  // align-items: center;
  // width: 100%;
  color: ${(props) => props.theme.palette.accentLight};
`;

export const TwilightBackground = styled.div<{ isSplashComplete: boolean }>`
  display: flex;
  background-image: url(${TwilightBg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${(props) => (props.isSplashComplete ? fadeInAnimation : "none")};
  opacity: 0;
  position: relative;
`;

export const MileenaBackground = styled.div`
  background-image: url(${MileenaBg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 375px;
  height: 100%;
  opacity: 0.25;
`;

export const KeyFeatureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
