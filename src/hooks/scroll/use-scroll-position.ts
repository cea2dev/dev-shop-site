import React, { useRef, useLayoutEffect } from "react";

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = (
  element: React.MutableRefObject<HTMLElement> | null,
  useWindow: boolean
): { x: number; y: number } => {
  if (!isBrowser) return { x: 0, y: 0 };

  if (useWindow) return { x: window.scrollX, y: window.scrollY };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return { x: position.left, y: position.top };
};

export const useScrollPosition = (
  effect: (position: {
    prevPos: { x: number; y: number };
    currPos: { x: number; y: number };
  }) => void,
  element: React.MutableRefObject<HTMLElement> | null,
  useWindow: boolean,
  wait: number | null,
  deps: React.DependencyList
) => {
  const position = useRef(getScrollPosition(element, useWindow));
  let throttleTimeout: NodeJS.Timeout | null = null;

  const callback = () => {
    const currPos = getScrollPosition(element, useWindow);
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callback, wait);
        }
      } else {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
};
