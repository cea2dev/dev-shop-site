import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { KeyFeatureList } from "./list";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<KeyFeatureList />);
  const container = getByTestId("key-feature-list");
  return { container, getByTestId };
};

test("renders KeyFeatureList", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
