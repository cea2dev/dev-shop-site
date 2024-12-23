import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { Home } from "./home";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<Home />);
  const container = getByTestId("home");
  return { container, getByTestId };
};

test("renders home", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
