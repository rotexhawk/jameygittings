import React from "react";
import rightIcon from "../../images/next.svg";
import styled from "styled-components";

const ArrowSvg = styled.img`
  text-indent: 0;
  transition: all 0.2s ease;
`;

const StyledLink = styled.a`
  display: block !important;
  display: flex !important;
  align-items: center;
  font-weight: 600;
  margin-top: 1rem;
  &:hover img {
    margin-right: 0.5rem;
  }
`;

export const RightIcon = () => <ArrowSvg src={rightIcon} />;

export const ArrowLink = ({ ...rest }) => (
  <StyledLink {...rest}>
    More
    <RightIcon />
  </StyledLink>
);
