import styled from "styled-components";

export const StyleLinkContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  padding-top: ${(props) => props.theme.spacing.medium};
`;
