import React from "react";
import GithubLogo from "@/assets/images/github-logo.png";
import LinkedInLogo from "@/assets/images/linkedin-logo.png";
import * as Styled from "./styles";

export interface SocialLinksProps {
  githubUrl: string;
  linkedInUrl: string;
}

export const SocialLinks = ({ githubUrl, linkedInUrl }: SocialLinksProps) => {
  return (
    <Styled.StyleLinkContainer data-testid="social-links">
      <a href={githubUrl}>
        <img alt="Github" src={GithubLogo} />
      </a>
      <a href={linkedInUrl}>
        <img alt="LinkedIn" src={LinkedInLogo} />
      </a>
    </Styled.StyleLinkContainer>
  );
};
