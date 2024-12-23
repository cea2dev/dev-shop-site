import React from "react";
import { Header } from "./header";
import { renderWithProviders } from "@/utils/test/render-with-providers";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<Header />);
  const container = getByTestId("header");
  return { container, getByTestId };
};

test("renders header", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
