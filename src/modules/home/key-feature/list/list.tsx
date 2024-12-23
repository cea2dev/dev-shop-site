import React from "react";
import { KeyFeatureCard } from "../card";
import * as Styled from "./styles";

export const KeyFeatureList = () => {
  return (
    <Styled.KeyFeatureList data-testid="key-feature-list">
      <KeyFeatureCard title="Web Development" />
      <KeyFeatureCard title="Desktop Development" />
      <KeyFeatureCard title="Scripting" />
    </Styled.KeyFeatureList>
  );
};
