import React from "react";
import { graphql } from "gatsby";
import { Heading, Section } from "react-bulma-components";
import { PageLayout } from "../components/layouts/pageLayout";
import { StaticImage } from "gatsby-plugin-image";

const WhatICareAbout = ({ data }) => {
  const { wpPage } = data;
  const { title, content } = wpPage;

  return (
    <PageLayout
      hero={
        <StaticImage
          src="../images/jamey-sitting.jpg"
          alt="jamey-gittings"
          placeholder="tracedSVG"
        />
      }
    >
      <Section>
        <Heading size={3} renderAs="h1" className="mb-6">
          {title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "what-i-care-about" }) {
      ...pageFields
      blocks {
        id
        innerHtml
        tagName
        type
        attributes {
          name
          value
        }
      }
    }
  }
`;

export default WhatICareAbout;
