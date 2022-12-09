import { graphql } from "gatsby";
import React from "react";
import { Heading } from "react-bulma-components";
import styled from "styled-components";
import { AttilaChapter } from "../../components/AttilaChapter";

const HeadingWrapper = styled.div`
  margin: 4rem 0;
`;

const BadMr21 = ({ data }) => {
  const { wpPage } = data;
  return (
    <AttilaChapter page={2}>
      <HeadingWrapper>
        Chapter One
        <Heading
          size={4}
          renderAs="h4"
          style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}
        >
          {wpPage.title}
        </Heading>
      </HeadingWrapper>
      <div dangerouslySetInnerHTML={{ __html: wpPage.content as string }} />
    </AttilaChapter>
  );
};

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "bad-mr-21" }) {
      ...pageFields
    }
  }
`;

export default BadMr21;
