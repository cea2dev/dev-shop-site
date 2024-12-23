import React from "react";
import * as Styled from "./styles";

export interface KeyFeatureCardProps {
  title: string;
}

export const KeyFeatureCard = ({ title }: KeyFeatureCardProps) => {
  return (
    <Styled.KeyFeatureCard data-testid="key-feature-card">
      <Styled.Title>{title}</Styled.Title>
    </Styled.KeyFeatureCard>
  );
};
