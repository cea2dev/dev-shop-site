import styled from "styled-components";
import { LogoSvg } from "./logo-svg";

export const Logo = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 24.5%;
`;

export const Svg = styled(LogoSvg)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;
