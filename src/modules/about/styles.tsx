import styled, { css, keyframes } from "styled-components";
import MileenaBg from "@/assets/images/mileena-about-bg_50.jpg";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

const fadeInUpAnimation = css`
  ${fadeInUp} 0.8s linear 0.4s forwards;
`;

export const About = styled.div`
  width: 100%;
  color: ${(props) => props.theme.palette.backgroundDark};
`;

export const Background = styled.div`
  background-image: url(${MileenaBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  position: relative;
`;

export const AboutTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.palette.textDark};
  margin: 40px 0;
  position: absolute;
  top: 55%;
  left: 5%;
  font-size: 2.75rem;
  opacity: 0;
  animation: ${fadeInLeft} 1s linear forwards;
`;

export const AboutHeader = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.palette.textDark};
  margin-top: 4rem;
  margin-bottom: 3rem;
  animation: ${fadeInRight} 1s linear forwards;
`;

export const AboutParagraph = styled.p`
  text-align: center;
  color: ${(props) => props.theme.palette.textDark};
  font-size: 1.5rem;
  margin: 0 auto;
  max-width: 800px;
  animation: ${fadeInLeft} 1s linear forwards;
`;

export const DevTeamHeader = styled.h1<{ animate: boolean }>`
  text-align: center;
  color: ${(props) => props.theme.palette.textDark};
  margin-top: 80px;
  margin-bottom: 30px;
  opacity: 0;
  animation: ${(props) => (props.animate ? fadeInUpAnimation : "none")};
`;

export const DevTeamHeaderLineBreak = styled.div<{ animate: boolean }>`
  border-bottom: 2px solid ${(props) => props.theme.palette.foregroundLight};
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  opacity: 0;
  animation: ${(props) => (props.animate ? fadeInUpAnimation : "none")};
`;

export const DevCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;
