import React from "react";
import { Box } from "react-bulma-components";
import {
  Section,
  Container,
  Columns,
  Heading,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { ArrowLink, RightIcon } from "../Icons/rightArrow";

const CoverImage = styled(GatsbyImage)`
  box-shadow: 0 0 10px 0 rgb(40 42 47 / 10%),
    -10px 10px 24px 10px rgb(40 42 47 / 5%),
    -30px 40px 30px 0 rgb(40 42 47 / 10%),
    -10px 10px 10px -5px rgb(40 42 47 / 10%);
`;
export const Books = ({ background }) => {
  const images = useStaticQuery(graphql`
    query {
      smallPox: file(relativePath: { regex: "/raccoons/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      horse: file(relativePath: { regex: "/meat-of-the-horse-cover.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      knock: file(relativePath: { regex: "/knock-three-times.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      coming: file(relativePath: { regex: "/coming-soon/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <Box>
      <Section centered="true">
        <Container>
          <HeadingImage size={2} level={2} background={background}>
            My Books
          </HeadingImage>
          <Columns className="is-centered">
            <Columns.Column size={8} className="has-text-centered pb-6 mb-6">
              <p>
                To date I've written four books one is a sequel, so the works
                contain four distinct stories and three different themes; the
                thread that connects them is, Ironic Justice in its various
                forms (justice that is a mirror image, or at least a shadow, of
                the original crime). I provide the titles and short descriptions
                below:
              </p>
            </Columns.Column>
          </Columns>
          <Columns className="is-variable">
            <BookContainer
              image={images.smallPox}
              title="On the Eradication of Smallpox and the Intractability of Raccoons"
            >
              <p className="is-size-6">
                <strong>
                  Ned Alexander is a freshly minted journalism school graduate,
                  under-experienced and over-educated, and he just pulled down
                  “the last job in town” in Tucson, Arizona. As Ned notes, “If
                  people know you’re from Harvard, they’ll hire you so they can
                  tell you what to do, and feel good when you screw up.”
                </strong>
              </p>
              <p className="is-size-6">
                When proponents of the death penalty begin showing up dead
                themselves, Ned has no time for screw-ups, and he has to draw on
                all of his background, connections, and problem-solving skills
                to get to the bottom of matters, all the while navigating the
                challenges posed by a new boss, an inscrutable co-worker, and a
                group that advances its aims by working in the shadows and in
                the sunlight. At every step—from Arizona to Texas to Tennessee
                to Virginia and D.C.—there are people to meet, mysteries to
                unravel, and local law enforcement that sees Ned not as a
                journalist at the nexus of a compelling story but perhaps as the
                answer to what’s going on and an easy scapegoat. Told in a
                smart, fast-paced way, On the Eradication of Smallpox and the
                Intractability of Raccoons is both a raucous ride and an
                illuminating, timeless examination of our politics, our progress
                and regress, and our recessions from reason.
                <ArrowLink href="./">
                  <RightIcon />
                </ArrowLink>
              </p>
            </BookContainer>
            <BookContainer image={images.horse} title="Meat of the Horse">
              <p className="is-size-6">
                <strong>
                  Ned Alexander, a reporter at large for an American newspaper,
                  has alighted in Paris after pursuing a long, dangerous,
                  emotional story in India and Nepal. All he wants is some
                  relaxation and recharging, but interesting—and often
                  deadly—occurrences have a way of finding him.
                </strong>
              </p>
              <p className="is-size-6">
                Before he’s even had time to sleep, Ned is plunged into a unique
                drama of international intrigue. Human body parts have found
                their way into horsemeat entrees served by one of the city’s
                finest restaurants, a prominent American politician has gone
                missing, and Ned has found allies in his assistant back at his
                paper, a beautiful doctor and the most precocious nine-year-old
                girl anyone is likely to meet.
              </p>
              <p className="is-size-6">
                In this story spanning newsrooms in Arizona and Montana, hotels
                and restaurants, and underground clubs in France, slaughterhouse
                backrooms in Canada and wild mustang ranges of the high plains,
                Ned tugs at loose ends, trying to discover where they lead. Amid
                the surprising turns, profound truths are revealed about where
                common good and craven self-interests converge and depart, the
                malignant forces that hide in plain sight, and the renewal of
                love.
                <ArrowLink href="./">
                  <RightIcon />
                </ArrowLink>
              </p>
            </BookContainer>

            <BookContainer
              image={images.knock}
              title="Knock Three Times and Ask for Attila"
            >
              <p className="is-size-6">
                <strong>
                  This is a work of science and fantasy that chronicles the
                  lives and trajectories of 15 young people with Down Syndrome
                  who are subjects in a federal gene replacement therapy
                  experiment that makes the subjects not only as smart as normal
                  (typical) people, but far smarter— geniuses in fact.
                </strong>
              </p>
              <p className="is-size-6">
                The narrator, Mason Free, tells the story of his personal
                transformation from “retard to genius,” documenting the progress
                of the group as it becomes a shadow global intellectual force.
                Often irreverent and sometimes politically incorrect, Mason and
                his cohorts grapple with cultural and personal biases, the
                nature of intellect itself, and what it means to be vulnerable,
                while addressing the societal ills of climate change,
                environmental destruction, cultural and racial prejudice, wealth
                inequality, and religious intolerance. Along the way, Mason
                falls in love and reflects on the nature and power of that love,
                not only for his girlfriend, Holly, but for his divorced
                parents, and humanity in general. The story, informed by the
                author’s own experiences in the field and burnished by
                imagination, is by turns hopeful and cynical, a work of fiction
                and a stark warning.
                <ArrowLink href="./">
                  <RightIcon />
                </ArrowLink>
              </p>
            </BookContainer>
            <BookContainer image={images.coming} title="Fetish">
              <p className="is-size-6">
                <strong>Fetish</strong>. With the delivery of a cigar box
                containing ancient Zuni fetishes and an exquisite obsidian
                knife, Tasha finds herself propelled, from her comfortable
                existence in the New York financial world into an odyssey of
                spirituality, self-discovery, and magic. Forced to contend with
                her mixed Native American and Anglo heritage, the effects of her
                cerebral palsy, and a troubled past, she reluctantly assumes the
                mantle of shaman for her tribe, as she stumbles through the
                dangerous alchemy necessity to her survival in a struggle to
                transform imbalance into balance, as she creates a place for
                herself among her people and her ancestors.
                <ArrowLink href="./">
                  <RightIcon />
                </ArrowLink>
              </p>
            </BookContainer>
          </Columns>
        </Container>
      </Section>
    </Box>
  );
};

const BookContainer = ({ image, title, children }) => {
  const src = getImage(image);
  return (
    <Columns.Column size={12} className="mb-5">
      <Columns className="mb-6">
        <Columns.Column size={4}>
          <CoverImage image={src} alt={title} />
        </Columns.Column>
        <Columns.Column size={8}>
          <Heading size={4} level={4} className="mb-5">
            {title}
          </Heading>
          {children}
        </Columns.Column>
      </Columns>
    </Columns.Column>
  );
};
