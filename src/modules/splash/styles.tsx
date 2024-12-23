import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const displayNone = css`
  display: none;
`;

export const Splash = styled.div<{ hideSplash: boolean }>`
  background: ${(props) => props.theme.palette.backgroundDark};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  position: fixed;
  top: 0;
  left 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  ${(props) => props.hideSplash ? displayNone : ""}
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 300px;
  opacity: 0;
  animation: ${fadeInUp} 2.0s linear 0.5s forwards;
`;
