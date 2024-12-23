import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { KeyFeatureCard } from "./card";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<KeyFeatureCard title="Test" />);
  const container = getByTestId("key-feature-card");
  return { container, getByTestId };
};

test("renders KeyFeatureCard", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
