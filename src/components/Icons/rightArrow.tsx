import React from "react";
import rightIcon from "../../images/next.svg";
import styled from "styled-components";
import { Link } from "gatsby";

const ArrowSvg = styled(({ ...rest }) => {
  return <img {...rest} />;
})`
  text-indent: 0;
  transition: all 0.2s ease;
`;

const StyledLink = styled(Link)`
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

export const LeftIcon = () => (
  <ArrowSvg src={rightIcon} style={{ transform: "scaleX(-1)" }} />
);

export const ArrowLink = ({ ...rest }) => (
  <StyledLink {...rest}>
    Read More
    <svg
      width="40px"
      height="30px"
      viewBox="0 0 40 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <g id="Artboard-Copy" stroke="#485fc7" strokeWidth="2">
          <g id="Group" transform="translate(9.000000, 8.000000)">
            <path d="M1,7 L20.3448242,7" id="Line"></path>
            <polyline
              id="Path-2"
              strokeLinejoin="round"
              points="15.6666667 0.333333333 22.3333333 7 15.6666667 13.6666667"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  </StyledLink>
);
