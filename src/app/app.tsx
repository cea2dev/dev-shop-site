import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "@/components/footer";
import { GlobalStyle } from "../styles";
import { BaseTheme } from "../themes/base";
import { ThemeProvider } from "styled-components";
import { Routes } from "@/routes";
import * as Styled from "./styles";
import { Header } from "@/components/header";
import { Splash } from "@/modules/splash";
import { SplashProvider } from "@/components/splash-provider";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={BaseTheme}>
        <SplashProvider>
          <GlobalStyle />
          {/* <Splash /> */}
          <Styled.App data-testid="app">
            <Header />
            <Styled.AppContent data-testid="app-content">
              <Routes />
            </Styled.AppContent>
            <Footer />
          </Styled.App>
        </SplashProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
