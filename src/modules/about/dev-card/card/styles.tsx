import styled, { css, keyframes } from "styled-components";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeftAnimation = css`
  ${fadeInLeft} 0.8s linear 1s forwards;
`;

const fadeInRightAnimation = css`
  ${fadeInRight} 0.8s linear 1s forwards;
`;

export const Card = styled.div<{
  animate: boolean;
  fadeInLeft: boolean | undefined;
}>`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  align-items: center;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${(props) =>
    props.animate
      ? props.fadeInLeft
        ? fadeInLeftAnimation
        : fadeInRightAnimation
      : "none"};
`;

export const Avatar = styled.div<{ avatar: string; animate: boolean }>`
  flex: 0 auto;
  background: url(${(props) => props.avatar}); #000;
  width: 150px;
  height: 150px;
  border: 2px solid #424242;
  border-radius: 50%;
  padding: 20px;
`;

export const Name = styled.h3<{ animate: boolean }>`
  text-align: center;
  color: ${(props) => props.theme.palette.textLight};
  margin-top: 2rem;
`;

export const Subtitle = styled.h5<{ animate: boolean }>`
  text-align: center;
  color: ${(props) => props.theme.palette.accentLight};
  margin-top 0.5rem;
`;

export const Bio = styled.p<{ animate: boolean }>`
  color: ${(props) => props.theme.palette.textLight};
  text-align: center;
  margin-top 1.75rem;
`;

export const FunFact = styled.div<{ animate: boolean }>`
  text-align: center;
  color: ${(props) => props.theme.palette.textLight};
  margin-top: ${(props) => props.theme.spacing.large};
  font-size: 0.78rem;
`;
