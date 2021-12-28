import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  Container,
  Section,
  Columns,
  Button,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";

export const WhatICareAbout = ({ background }) => {
  return (
    <Section className="has-text-centered">
      <Container>
        <StaticImage
          src="../../images/jamey-gittings.jpg"
          alt="jamey-gittings"
          width={500}
          placeholder="tracedSVG"
          className="mb-5"
        />
        <HeadingImage size={2} level={2} background={background}>
          What I Care About
        </HeadingImage>
        <Columns className="has-text-left" centered="true">
          <Columns.Column size={10}>
            <p>
              Kurt Vonnegut once said that an author must start with a list of
              what she or he cares about, or something close, While, he wasn't
              the only one to say that, here are a few of mine:
            </p>

            <p>
              The worth of each individual. Whomever, wherever, and whatever
              circumstances he or she find themselves.
            </p>

            <p>
              The ability of people to rise above obstacles, imposed by birth,
              class, culture, by one's own doing, or the doings of others.
              Fighting for rights — Tilting at windmills.
            </p>

            <p>
              The language of how people talk to each other, assert themselves,
              exchange information and ideas. The sound of language as it
              relates to context and setting.
            </p>

            <p>
              Humor and irony. The ability to view and assess one's self and
              other's actions, conditions, and choices, within the context of
              humor and irony. To see the comedy of situations, even grave one's
              — particularly grave ones.
            </p>

            <p className="pb-5">
              Unresolved questions and mysteries and the struggle of both
              successful, and unsuccessful, attempts to resolve them.
              Particularly the unsuccessful
            </p>
            <a href="/what-i-care-about" className="button is-info">
              Read More
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
