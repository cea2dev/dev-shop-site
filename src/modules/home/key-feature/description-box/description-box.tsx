import React from "react";
import { KeyFeatureCard } from "../card";
import * as Styled from "./styles";

export const KeyFeatureDescriptionBox = () => {
  return (
    <Styled.KeyFeatureDescriptionBox data-testid="key-feature-description-box">
      <KeyFeatureCard title="Web Development" />
      <KeyFeatureCard title="Desktop Development" />
      <KeyFeatureCard title="Scripting" />
    </Styled.KeyFeatureDescriptionBox>
  );
};
