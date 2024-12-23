import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { NavbarItem } from "./navbar-item";
import { NavigationOption } from "@/navigation";

const renderTest = () => {
  const option: NavigationOption = {
    title: "Test",
    route: "/test",
  };

  const { getByTestId } = renderWithProviders(
    <NavbarItem key={1} option={option} isTopOfPage={true} />
  );

  const container = getByTestId("navbar-item");
  return { container, getByTestId };
};

test("renders NavBarItem", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
