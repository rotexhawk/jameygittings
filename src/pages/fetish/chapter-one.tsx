import { graphql } from "gatsby";
import React from "react";
import { Heading } from "react-bulma-components";
import styled from "styled-components";
import { FetishChapter } from "../../components/FetishChapter";

const HeadingWrapper = styled.div`
  margin: 4rem 0;
`;

const TheCigarBox = ({ data }) => {
  const { wpPage } = data;
  return (
    <FetishChapter page={2}>
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
    </FetishChapter>
  );
};

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "the-cigar-box" }) {
      ...pageFields
    }
  }
`;

export default TheCigarBox;
