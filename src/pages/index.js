import React from "react";
import { HomeLayout } from "../components/layouts/homeLayout";
import {
  Container,
  Section,
  Heading,
  Columns,
  Box,
  Button,
} from "react-bulma-components/esm/";
import { HomepageHero } from "../components/HomepageHero";
import headshot from "../images/jamey-gittings.jpg";
import feather from "../images/feather.png";
import sunflower from "../images/sunflower.png";
import { Books } from "../components/Books";
import { HeadingImage } from "../components/HeadingImage";

const Page = () => {
  return (
    <HomeLayout hero={<HomepageHero />}>
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
                <img src={headshot} align="left" width="500" />
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
                  To take myself out of the third person: After a brief foray
                  into what it takes to publish a book, and conform to the
                  requirements and stricture needed to submit a work to a
                  publisher or agent, it struck me I was back in Miss Muir’s 5th
                  grade classroom doing endless long division homework, (perhaps
                  valuable but tedious). Pleading your case to be read by an
                  agent or publisher, even if it’s not overt begging. Waiting
                  out long periods of darkness and silence to hear back the fate
                  of your child — what parent would endure that? Praying to the
                  God of serendipity, for a chance encounter with a like-minded
                  over-taxed agent or publisher’s assistant to champion your
                  book to those who count — I don’t have the lifespan for that:
                  so, I started my own publishing company. If it’s a flying kiss
                  at the wind, it’s my kiss.
                </p>
              </Columns.Column>
            </Columns>
          </Section>
        </Box>
        <Section className="has-text-centered pb-8">
          <Columns>
            <Columns.Column size={8} offset={2}>
              <HeadingImage size={2} level={2} background={feather}>
                Attila Press
              </HeadingImage>
              <p>
                Attila Press, is currently a publisher solely of my own books, I
                know it’s as pompous and arrogant as an attempt to cross Lake
                Superior on a rubber raft in November, but it’s a better than
                sitting in silent vigil, and at least my grandchildren will have
                something to read. If I make it halfway across the lake, I’ll
                open it up to other hapless authors in their winter years. So
                here goes: You can go online at
                <br />
                <a href="https://www.attilapress.com">AttilaPress.com</a>
              </p>
            </Columns.Column>
          </Columns>
        </Section>
      </Container>

      <Box>
        <Section className="has-text-centered">
          <Container>
            <HeadingImage size={2} level={2} background={sunflower}>
              What I Care About
            </HeadingImage>
            <Columns className="has-text-left">
              <Columns.Column size={10} offset={1}>
                <p>
                  Kurt Vonnegut once said that an author must start with a list
                  of what she or he cares about, or something close; he wasn't
                  the only one to say that. <br /> So here are a few of mine:
                </p>

                <p>
                  The worth of each individual. Whomever, where ever, and
                  whatever circumstances he or she find themselves.
                </p>

                <p>
                  The ability of people to rise above obstacles, imposed by
                  birth, class, culture, by one's own doing, or the doings of
                  others. Fighting for rights — Tilting at windmills.
                </p>

                <p>
                  The language of how people talk to each other, assert
                  themselves, exchange information and ideas. The sound of
                  language as it relates to context and setting.
                </p>

                <p>
                  Humor and irony. The ability to view and assess one's self and
                  other's actions, conditions, and choices, within the context
                  of humor and irony. To see the comedy of situations, even
                  grave one's — particularly grave ones.
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
      <Section className="has-text-centered">
        <Container>
          <HeadingImage size={2} level={2} background={feather}>
            What I Want From Readers
          </HeadingImage>
          <Columns className="has-text-left">
            <Columns.Column size={10} offset={1}>
              <p>
                In books on publishing and writing you find the oft-quoted
                truism that you must know the readers who you write for, and
                tell them what you have to give them. I think this is the
                wrong-way-round. A fiction writer gives what he has to give, and
                attempts to modify or adapt this to a particular group or
                population seems, if not wrong, at least not the point of good
                storytelling. A more direct approach is rather to ask, what the
                writer wants from his or her readers, so the reader doesn't have
                to waste their time on that particular author. While the result
                of the two approaches are similar — to bring like-minded readers
                and authors together — the ladder strategy leaves both reader
                and writer intact. So all of that said, this is what I look for
                in a reader:
              </p>
              <p>
                Someone who is uncomfortable with the comfortable; someone who
                is suspicious with routine; with things as they are usually
                done.
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
      <Books />
      <Section className="has-text-centered pb-8">
        <Columns>
          <Columns.Column size={8} offset={2}>
            <HeadingImage size={2} level={2} background={feather}>
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
      </Section>
    </HomeLayout>
  );
};

export default Page;
