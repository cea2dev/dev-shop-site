import React, { useState } from "react";
import { useOnScreen } from "@/hooks/scroll/use-is-element-on-screen";

import { SocialLinks } from "../social-links";
import * as Styled from "./styles";

export interface DevCardProps {
  name: string;
  subtitle: string;
  avatar: string;
  bio: string;
  funFact: string;
  githubUrl: string;
  linkedInUrl: string;
  fadeInLeft?: boolean;
}

export const DevCard = ({
  name,
  subtitle,
  avatar,
  bio,
  funFact,
  githubUrl,
  linkedInUrl,
  fadeInLeft,
}: DevCardProps) => {
  const [isOnScreen, divRef] = useOnScreen<HTMLDivElement>(-80);
  const [animated, setAnimated] = useState(isOnScreen);

  if (isOnScreen && !animated) setAnimated(true);

  return (
    <Styled.Card data-testid="dev-card" ref={divRef} animate={animated} fadeInLeft={fadeInLeft}>
      <Styled.Avatar avatar={avatar} animate={animated}></Styled.Avatar>
      <Styled.Name animate={animated}>{name}</Styled.Name>
      <Styled.Subtitle animate={animated}>{subtitle}</Styled.Subtitle>
      <Styled.Bio animate={animated}>{bio}</Styled.Bio>
      <Styled.FunFact
        animate={animated}
      >{`Fun Fact: ${funFact}`}</Styled.FunFact>
      <SocialLinks githubUrl={githubUrl} linkedInUrl={linkedInUrl} />
    </Styled.Card>
  );
};
