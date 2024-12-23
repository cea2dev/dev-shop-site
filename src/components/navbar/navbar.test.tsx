import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { Navbar } from "./navbar";
import { NavigationOption } from "@/navigation";

const renderTest = () => {
  const options: NavigationOption[] = [
    {
      title: "Test",
      route: "/test",
    },
  ];

  const { getByTestId } = renderWithProviders(<Navbar options={options} isTopOfPage />);
  const container = getByTestId("navbar");
  return { container, getByTestId };
};

test("renders link", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
