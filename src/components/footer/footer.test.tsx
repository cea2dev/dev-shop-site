import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { Footer } from "./footer";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<Footer />);
  const container = getByTestId("footer");
  return { container, getByTestId };
};

test("renders footer", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
