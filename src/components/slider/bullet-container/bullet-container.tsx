import React from "react";
import * as Styled from "./styles";

export interface SliderBulletContainerProps {
  hrefs: string[];
}

export const SliderBulletContainer = ({
  hrefs,
}: SliderBulletContainerProps) => {
  return (
    <Styled.Container data-testid="slider-bullet-container">
      {hrefs.map((href, i) => (
        <Styled.Bullet key={i} href={href} />
      ))}
    </Styled.Container>
  );
};
