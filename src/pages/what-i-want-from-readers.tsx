import React from "react";
import { graphql } from "gatsby";
import { Heading } from "react-bulma-components";
import { PageLayout } from "../components/layouts/pageLayout";

const WhatIWantFromReaders = ({ data }) => {
  const { wpPage } = data;
  const { title, content } = wpPage;
  return (
    <PageLayout>
      <Heading size={3} renderAs="h1">
        {title}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "what-i-want-from-readers" }) {
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

export default WhatIWantFromReaders;
