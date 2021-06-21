import React from "react";
import {
  Box,
  Container,
  Section,
  Columns,
  Button,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";

export const WhatICareAbout = ({ background }) => {
  return (
    <Box>
      <Section className="has-text-centered">
        <Container>
          <HeadingImage size={2} level={2} background={background}>
            What I Care About
          </HeadingImage>
          <Columns className="has-text-left" centered="true">
            <Columns.Column size={10}>
              <p>
                Kurt Vonnegut once said that an author must start with a list of
                what she or he cares about, or something close; he wasn't the
                only one to say that. <br /> So here are a few of mine:
              </p>

              <p>
                The worth of each individual. Whomever, where ever, and whatever
                circumstances he or she find themselves.
              </p>

              <p>
                The ability of people to rise above obstacles, imposed by birth,
                class, culture, by one's own doing, or the doings of others.
                Fighting for rights — Tilting at windmills.
              </p>

              <p>
                The language of how people talk to each other, assert
                themselves, exchange information and ideas. The sound of
                language as it relates to context and setting.
              </p>

              <p>
                Humor and irony. The ability to view and assess one's self and
                other's actions, conditions, and choices, within the context of
                humor and irony. To see the comedy of situations, even grave
                one's — particularly grave ones.
              </p>

              <p className="pb-5">
                Unresolved questions and mysteries and the struggle of both
                successful, and unsuccessful, attempts to resolve them.
                Particularly the unsuccessful
              </p>
              <a href="/what-i-care-about">
                <Button
                  color="primary"
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
    </Box>
  );
};
