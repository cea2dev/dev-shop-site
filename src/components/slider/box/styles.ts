import styled from "styled-components";

export const Box = styled.div`
  height: 500px;
  border: 2px solid white;
`;

export const Content = styled.div`
  // display: flex;
  // flex: 1 0 auto;
  height: 100%;
  overflow: hidden;
`;

export const Item = styled.div<{ backgroundColor: string }>`
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 100%;
  background: ${(props) => props.backgroundColor};
`;
