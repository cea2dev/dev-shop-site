import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { KeyFeatureDescriptionBox } from "./description-box";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<KeyFeatureDescriptionBox />);
  const container = getByTestId("key-feature-description-box");
  return { container, getByTestId };
};

test("renders KeyFeatureDescriptionBox", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
