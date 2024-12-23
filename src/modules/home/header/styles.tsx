import styled, { css, keyframes } from "styled-components";

const animationPixels = 100;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(${animationPixels}px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-${animationPixels}px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeftAnimation = css`
  ${fadeInLeft} 1s linear 0.2s forwards
`;

const fadeInRightAnimation = css`
  ${fadeInRight} 1s linear 1.2s forwards
`;

export const Home = styled.div`
  color: ${(props) => props.theme.palette.accentLight};
`;

export const Background = styled.div`
  background: ${(props) => props.theme.palette.backgroundDark};
  height: 16rem;
`;

export const One = styled.h2<{ isTopOfPage: boolean, isSplashComplete: boolean }>`
  color: ${(props) =>
    props.isTopOfPage
      ? props.theme.palette.textDark
      : props.theme.palette.textLight};
  font-size: 2rem;
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${(props) => (props.isSplashComplete ? fadeInLeftAnimation : "none")};
`;

export const Two = styled.h2<{ isTopOfPage: boolean, isSplashComplete: boolean }>`
  color: ${(props) =>
    props.isTopOfPage
      ? props.theme.palette.textDark
      : props.theme.palette.textLight};
  font-size: 2rem;
  text-align: center;
  margin: 3rem 0;
  opacity: 0;
  animation: ${(props) => (props.isSplashComplete ? fadeInRightAnimation : "none")};
`;
