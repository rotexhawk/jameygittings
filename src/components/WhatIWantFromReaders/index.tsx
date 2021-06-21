import React from "react";
import {
  Section,
  Container,
  Columns,
  Button,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";

export const WhatIWantFromReaders = ({ background }) => {
  return (
    <Section className="has-text-centered">
      <Container>
        <HeadingImage size={2} level={2} background={background}>
          What I Want From Readers
        </HeadingImage>
        <Columns className="has-text-left" centered="true">
          <Columns.Column size={10}>
            <p>
              In books on publishing and writing you find the oft-quoted truism
              that you must know the readers who you write for, and tell them
              what you have to give them. I think this is the wrong-way-round. A
              fiction writer gives what he has to give, and attempts to modify
              or adapt this to a particular group or population seems, if not
              wrong, at least not the point of good storytelling. A more direct
              approach is rather to ask, what the writer wants from his or her
              readers, so the reader doesn't have to waste their time on that
              particular author. While the result of the two approaches are
              similar — to bring like-minded readers and authors together — the
              ladder strategy leaves both reader and writer intact. So all of
              that said, this is what I look for in a reader:
            </p>
            <p>
              Someone who is uncomfortable with the comfortable; someone who is
              suspicious with routine; with things as they are usually done.
            </p>
            <p className="pb-5">
              Readers who bring with them an attitude, and don't mind a writer
              who does the same.
            </p>
            <a href="/what-i-want-from-readers">
              <Button
                color="info"
                css={`
                  margin: 2rem auto 0 auto;
                  display: block;
                `}
              >
                Read More
              </Button>
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
