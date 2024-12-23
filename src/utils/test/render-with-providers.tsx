import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { SplashProvider } from "@/components/splash-provider";
import { Theme } from "@/themes/types";
import { BaseTheme } from "@/themes/base";

export type IncludeProvidersProps = {
  children?: NonNullable<React.ReactNode>;
  theme?: Theme;
};

const IncludeProviders: React.FC<IncludeProvidersProps> = ({
  children,
  theme,
}) => {
  return (
    <BrowserRouter>
      <SplashProvider>
        <ThemeProvider theme={theme ?? BaseTheme}>{children}</ThemeProvider>
      </SplashProvider>
    </BrowserRouter>
  );
};

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: IncludeProviders, ...options });

export * from "@testing-library/react";
