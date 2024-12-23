import React from "react";
import * as Styled from "./styles";

export interface SliderBoxProps {
  backgrounds: string[];
  hrefs: string[];
}

export const SliderBox = ({ backgrounds, hrefs }: SliderBoxProps) => {
  return (
    <Styled.Box data-testid="slider-box">
      <Styled.Content>
        {backgrounds.map((bg, i) => (
          <Styled.Item id={hrefs[i]} key={i} backgroundColor={bg} />
        ))}
      </Styled.Content>
    </Styled.Box>
  );
};
