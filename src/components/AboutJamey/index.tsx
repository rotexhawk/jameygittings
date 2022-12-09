import React from "react";
import {
  Section,
  Columns,
  Heading,
  Container,
  Box,
} from "react-bulma-components";
import { StaticImage } from "gatsby-plugin-image";

export const AboutJamey = ({ children }) => {
  return (
    <Container>
      <Box
        className="mb-0"
        css={`
          margin-top: -5rem;
        `}
      >
        <Section>
          <Columns>
            <Columns.Column size="one-third">
              <StaticImage
                src="../../images/jamey-pic-two.jpg"
                alt="jamey-gittings"
                width={500}
                placeholder="tracedSVG"
              />
            </Columns.Column>
            <Columns.Column>{children}</Columns.Column>
          </Columns>
        </Section>
      </Box>
    </Container>
  );
};
