import React, { useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";

export const useOnScreen = <TElement extends HTMLElement>(
  offsetPixels: number,
  throttleMs: number = 100
): [boolean, React.RefObject<TElement>] => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const element = useRef<TElement>(null);

  const onScroll = useMemo(
    () =>
      throttle(() => {
        if (!element.current) {
          setIsOnScreen(false);
        } else {
          const top = element.current.getBoundingClientRect().top;
          setIsOnScreen(
            top + offsetPixels >= 0 && top - offsetPixels <= window.innerHeight
          );
        }
      }, throttleMs),
    [element, offsetPixels, throttleMs]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  return [isOnScreen, element];
};
