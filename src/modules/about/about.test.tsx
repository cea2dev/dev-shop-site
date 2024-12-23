import React from "react";
import { About } from "./about";
import { renderWithProviders } from "@/utils/test/render-with-providers";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<About />);
  const container = getByTestId("about");
  return { container, getByTestId };
};

test("renders about", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
