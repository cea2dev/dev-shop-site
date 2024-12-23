import React from "react";
import { SliderBox } from "./box";
import { SliderBulletContainer } from "./bullet-container";
import * as Styled from "./styles";

export interface SliderProps {
  title?: string;
  // hrefs: string[];
}

export const Slider = ({ title }: SliderProps) => {
  const testBgs = ["red", "white", "blue"];

  const hrefs = testBgs.map((bg, i) => `#slider-${bg}-${i}`);

  return (
    <Styled.Slider data-testid="slider">
      {title && <Styled.Header>{title}</Styled.Header>}
      <SliderBox backgrounds={testBgs} hrefs={hrefs} />
      <SliderBulletContainer hrefs={hrefs} />
    </Styled.Slider>
  );
};
