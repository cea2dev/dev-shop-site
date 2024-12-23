import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { App } from "./app";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<App />);
  const container = getByTestId("app");
  return { container, getByTestId };
};

test("renders app", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
