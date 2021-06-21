import React from "react";
import styled from "styled-components";
import { Heading, Container } from "react-bulma-components/esm";
import { StaticImage } from "gatsby-plugin-image";

const Hero = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;

const RelativeContainer = styled(Container)`
  position: relative;
  height: 100%;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 20rem;
  max-width: 432px;
  padding-left: 2rem;
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
        <StaticImage
          src="../../images/hero.jpeg"
          alt=""
          placeholder="tracedSVG"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <RelativeContainer>
        <AbsoluteContainer>
          <Heading level={1} className="has-text-white" size={1}>
            Jamey <br /> Gittings <br />
          </Heading>
          <p className="has-text-white is-size-5">
            Jamey Gittings writes stories of Ironic Justice. Of varied themes,
            his fiction puts center stage, justice in its ironical context.{" "}
          </p>
        </AbsoluteContainer>
      </RelativeContainer>
    </Hero>
  );
};
