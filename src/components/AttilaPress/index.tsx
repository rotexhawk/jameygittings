import React from "react";
import { Section, Container, Columns } from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";

export const AttilaPress = ({ background }) => {
  return (
    <Section className="has-text-centered pb-8">
      <Container>
        <Columns centered="true">
          <Columns.Column size={8}>
            <HeadingImage size={2} level={2} background={background}>
              Attila Press
            </HeadingImage>
            <p>
              Attila Press, is currently a publisher solely of my own books, I
              know it’s as pompous and arrogant as an attempt to cross Lake
              Superior on a rubber raft in November, but it’s a better than
              sitting in silent vigil, and at least my grandchildren will have
              something to read. If I make it halfway across the lake, I’ll open
              it up to other hapless authors in their winter years. So here
              goes: You can go online at
              <br />
              <a href="https://www.attilapress.com">AttilaPress.com</a>
            </p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
