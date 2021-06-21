import React from "react";
import {
  Section,
  Columns,
  Heading,
  Container,
  Box,
} from "react-bulma-components/esm";
import { StaticImage } from "gatsby-plugin-image";

export const AboutJamey = ({}) => {
  return (
    <Container>
      <Box
        className="mb-0"
        css={`
          margin-top: -5rem;
        `}
      >
        <Section>
          <Columns className="pt-6 pb-6">
            <Columns.Column size="one-third">
              <StaticImage
                src="../../images/jamey-gittings.jpg"
                alt="jamey-gittings"
                width={500}
                placeholder="tracedSVG"
              />
            </Columns.Column>
            <Columns.Column>
              <Heading size={3} level={1}>
                About Jamey
              </Heading>
              <p className="pb-5">
                Jamey Gittings writes stories of Ironic Justice. Of varied
                themes, his fiction puts center stage, justice in its ironical
                context. Whether mysteries, fantasy, social critique,
                spirituality, or short stories, all his books deal with social
                justice in an oblique, left-handed wild-ride, that leaves
                readers a little better off than when they picked up the book.
                Isn’t that the reason to write fiction?
              </p>
              <Heading size={3} level={2}>
                How I Got Here
              </Heading>
              <p>
                To take myself out of the third person: After a brief foray into
                what it takes to publish a book, and conform to the requirements
                and stricture needed to submit a work to a publisher or agent,
                it struck me I was back in Miss Muir’s 5th grade classroom doing
                endless long division homework, (perhaps valuable but tedious).
                Pleading your case to be read by an agent or publisher, even if
                it’s not overt begging. Waiting out long periods of darkness and
                silence to hear back the fate of your child — what parent would
                endure that? Praying to the God of serendipity, for a chance
                encounter with a like-minded over-taxed agent or publisher’s
                assistant to champion your book to those who count — I don’t
                have the lifespan for that: so, I started my own publishing
                company. If it’s a flying kiss at the wind, it’s my kiss.
              </p>
            </Columns.Column>
          </Columns>
        </Section>
      </Box>
    </Container>
  );
};
