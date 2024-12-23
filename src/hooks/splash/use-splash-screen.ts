import React, { useContext, useEffect } from "react";
import { SplashContext, SplashState } from "@/components/splash-provider";

export const useHideSplashScreen = (timeoutMs: number): boolean => {
  const [isSplashComplete, setIsSplashComplete] = useContext(
    SplashContext
  ) as SplashState;

  useEffect(() => {
    // const onDomContentLoaded = () => {
    //   setTimeout(() => {
    //     setIsSplashComplete(true);
    //     console.log("true");
    //   }, timeoutMs);
    // };

    // document.addEventListener("DOMContentLoaded", onDomContentLoaded);

    // return () =>
    //   document.removeEventListener("DOMContentLoaded", onDomContentLoaded);
    setTimeout(() => {
      setIsSplashComplete(true);
    }, timeoutMs);
  });

  return isSplashComplete;
};
