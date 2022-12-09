import React from "react";
import {
  Section,
  Container,
  Columns,
  Button,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";

export const OtherOfferings = ({}) => {
  return (
    <Section className="has-text-centered pb-8">
      <Container>
        <Columns centered="true">
          <Columns.Column size={8}>
            <HeadingImage size={2} renderAs="h2">
              Other Offerings
            </HeadingImage>
            <p>
              In addition to my books I have also authored short stories that I
              periodically provide for free viewing on the website Attila
              Press.org. Click the button below if you're interested.
              <br />
            </p>
            <a href="https://www.attilapress.com/short-stories">
              <Button color="primary">Short Stories</Button>
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
