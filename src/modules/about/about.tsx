import React, { useState } from "react";
import { DevCard } from "./dev-card";
import { useOnScreen } from "@/hooks/scroll";
import DevOneAvatar from "@/assets/images/dev1-avatar.jpg";
import DevTwoAvatar from "@/assets/images/dev2-avatar.png";
import * as Styled from "./styles";

export const About = () => {
  const [isDevHeaderOnScreen, devHeaderRef] =
    useOnScreen<HTMLHeadingElement>(-20);

  const [isDevHeaderAnimated, setIsDevHeaderAnimated] =
    useState(isDevHeaderOnScreen);

  if (isDevHeaderOnScreen && !isDevHeaderAnimated) setIsDevHeaderAnimated(true);

  return (
    <Styled.About data-testid="about">
      <Styled.Background>
        <Styled.AboutTitle>About Us</Styled.AboutTitle>
      </Styled.Background>
      <Styled.AboutHeader>We Build Awesome Software.</Styled.AboutHeader>
      <Styled.AboutParagraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, velit
        autem. Nobis sed, obcaecati possimus quidem asperiores odio expedita
        debitis porro fugiat perferendis voluptas. A impedit harum tempore
        excepturi saepe!
      </Styled.AboutParagraph>
      <Styled.DevTeamHeader animate={isDevHeaderAnimated} ref={devHeaderRef}>
        Meet Your New Dev Team.
      </Styled.DevTeamHeader>
      <Styled.DevTeamHeaderLineBreak animate={isDevHeaderAnimated} />
      <Styled.DevCardContainer>
        <DevCard
          name="Dev 1"
          subtitle="Full stack wizard 👽"
          avatar={DevOneAvatar}
          bio="Expert, self-taught programmer with over six years of experience. 
            Knowledgable and hard-working, DevOne is guaranteed to be an asset in any project. 
            Also guaranteed to be one of the coolest people you'll ever know, so that's a plus."
          funFact="Powered by lots of passion and caffeine. ☕"
          githubUrl="https://github.com/tfecreative"
          linkedInUrl="https://www.linkedin.com/in/chris-alexander-119155aa/"
          fadeInLeft
        />
        <DevCard
          name="Dev 2"
          subtitle="BackEnd Jedi"
          avatar={DevTwoAvatar}
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            vero suscipit quo debitis odit magnam eos obcaecati facere sint
            voluptas fugiat dignissimos veniam quae alias minus, perspiciatis
            illo. Dolorem, excepturi?"
          funFact="Cooks sometimes. 🥘"
          githubUrl="https://github.com/calexa22"
          linkedInUrl="https://www.linkedin.com/in/chris-alexander-119155aa/"
        />
      </Styled.DevCardContainer>
    </Styled.About>
  );
};
