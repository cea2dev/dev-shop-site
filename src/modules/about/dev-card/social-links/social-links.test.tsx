import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { SocialLinks } from "./social-links";

const renderTest = () => {
  const props = {
    githubUrl: "name",
    linkedInUrl: "name",
  };

  const { getByTestId } = renderWithProviders(<SocialLinks {...props} />);
  const container = getByTestId("social-links");
  return { container, getByTestId };
};

test("renders SocialLinks", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
