import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { HomeHeader } from "./header";

const renderTest = () => {
  const { getByTestId } = renderWithProviders(<HomeHeader isSplashComplete />);
  const container = getByTestId("home-header");
  return { container, getByTestId };
};

test("renders HomeHeader", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
