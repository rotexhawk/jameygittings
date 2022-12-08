import { graphql } from "gatsby";

export const pageFields = graphql`
  fragment pageFields on WpPage {
    id
    title
    slug
    link
    content
    parentDatabaseId
    databaseId
  }
`;
