import React from "react";
import styled from "styled-components";
import heroImage from "../../images/hero.jpeg";
import { Heading, Container } from "react-bulma-components/esm";

const Hero = styled(({ background, ...rest }) => <div {...rest} />)`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
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
  max-width: 400px;
`;

export const HomepageHero = ({ ...rest }) => {
  return (
    <Hero background={heroImage} {...rest}>
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
