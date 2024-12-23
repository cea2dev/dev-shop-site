import styled from "styled-components";

export const KeyFeatureCard = styled.div`
  // display: flex;
  // flex: 1;
  // flex-direction: column;
  // align-items: center;
  // width: 100%;
  color: ${(props) => props.theme.palette.textDark};
  flex-basis: 25%;
  border: 2px solid ${(props) => props.theme.palette.foregroundLight};
  border-radius: 4px;
  background ${(props) => props.theme.palette.foregroundLight};
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.palette.textDark};
  text-align: center;
  margin: 1rem 0;
`;
