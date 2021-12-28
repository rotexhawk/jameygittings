import React from "react";
import styled from "styled-components";
import { Container } from "react-bulma-components/esm";
import { StaticImage } from "gatsby-plugin-image";

const Hero = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;

const RelativeContainer = styled(Container)`
  position: relative;
  height: 100%;
  z-index: 2;
`;

const AbsoluteContainer = styled.div`
  padding-top: 20%;
`;

const BannerQuoteWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  p {
    text-align: center;
    font-size: 1.5rem !important;
  }
`;

const AuthorName = styled.h5`
  text-align: right;
  color: white !important;
  font-weight: bold !important;
`;

export const HomepageHero = ({ ...rest }) => {
  return (
    <Hero {...rest}>
      <div
        css={`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={`
            background-color: rgba(0, 0, 0, 0.5);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1;
            position: absolute;
          `}
        />
        <StaticImage
          src="../../images/hero.jpg"
          alt=""
          placeholder="tracedSVG"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <RelativeContainer>
        <AbsoluteContainer>
          <BannerQuoteWrapper>
            <p className="has-text-white is-size-5">
              Work with all your intelligence <br />
              And love. <br />
              Work freely and rollickingly as though talking <br />
              ... To a friend who loves you.
            </p>
            <p className="has-text-white is-size-5 is-text-centered">
              Mentally (at least three or four times a day) <br />
              Thumb your nose <br /> At all the know-it-alls, jeerers, critics,
              doubters.
            </p>
            <AuthorName>Brenda Ueland</AuthorName>
          </BannerQuoteWrapper>
        </AbsoluteContainer>
      </RelativeContainer>
    </Hero>
  );
};
