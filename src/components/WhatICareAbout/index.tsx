import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Section, Columns } from "react-bulma-components";

export const WhatICareAbout = ({ children }) => {
  return (
    <Section className="has-text-centered">
      <Container>
        <StaticImage
          src="../../images/jamey-gittings.jpg"
          alt="jamey-gittings"
          width={500}
          placeholder="tracedSVG"
          className="mb-5"
        />

        <Columns className="has-text-left" centered={true}>
          <Columns.Column size={10}>
            {children}
            <a href="/what-i-care-about" className="button is-info">
              Read More
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
