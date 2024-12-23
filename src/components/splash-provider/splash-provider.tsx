import React, { useState } from "react";

export type SplashState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export const SplashContext = React.createContext({});

export const SplashProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSplashCompleted, setIsSplashComplete] = useState(false);

  return (
    <SplashContext.Provider value={[isSplashCompleted, setIsSplashComplete]}>
      {children}
    </SplashContext.Provider>
  );
};
