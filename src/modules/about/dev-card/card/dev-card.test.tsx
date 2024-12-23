import React from "react";
import { renderWithProviders } from "@/utils/test/render-with-providers";
import { DevCard } from "./dev-card";

const renderTest = () => {
  const props = {
    name: "name",
    subtitle: "name",
    avatar: "name",
    bio: "name",
    funFact: "name",
    githubUrl: "name",
    linkedInUrl: "name",
  };

  const { getByTestId } = renderWithProviders(<DevCard {...props} />);
  const container = getByTestId("dev-card");
  return { container, getByTestId };
};

test("renders DevCard", () => {
  const { container } = renderTest();
  expect(container).toBeInTheDocument();
});
