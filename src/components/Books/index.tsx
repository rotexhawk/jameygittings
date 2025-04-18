import React from "react";
import { Box, Button } from "react-bulma-components";
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
import {
  blockTextGetter,
  singleBlockGetter,
  toBlockHtml,
} from "../../utils/helpers";

const CoverImage = styled(GatsbyImage)`
  box-shadow: 0 0 10px 0 rgb(40 42 47 / 10%),
    -10px 10px 24px 10px rgb(40 42 47 / 5%),
    -30px 40px 30px 0 rgb(40 42 47 / 10%),
    -10px 10px 10px -5px rgb(40 42 47 / 10%);
`;
export const Books = ({ blocks }) => {
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
      coming: file(relativePath: { regex: "/fetish-book-cover/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      jane: file(relativePath: { regex: "/jane/" }) {
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

  const getBlockText = blockTextGetter(blocks);
  const getSingleBlock = singleBlockGetter(blocks);

  const getBlockHtml = (beginningBlock: string, endingBlock?: string) => {
    return toBlockHtml(getBlockText(beginningBlock, endingBlock));
  };

  const booksIntroSection = getBlockHtml(
    "my-books",
    "eradication-of-small-pox"
  );

  const eradicationTitle = getSingleBlock("eradication-of-small-pox");
  const eradicationText = getBlockHtml(
    "eradication-of-small-pox-begin",
    "meat-of-the-horse"
  );

  const meatOfTheHorseTitle = getSingleBlock("meat-of-the-horse");
  const meatOfTheHorseText = getBlockHtml("meat-of-the-horse-begin", "attila");

  const attilaTitle = getSingleBlock("attila");
  const attilaText = getBlockHtml("attila-begin", "fetish");

  const fetishTitle = getSingleBlock("fetish");
  const fetishText = getBlockHtml("fetish-begin", "jane");

  const janeTitle = getSingleBlock("jane"); 
  const janeText = getBlockHtml("jane-begin", "other-offerings"); 

  return (
    <Box id="books">
      <Section centered="true">
        <Container>
          <Columns className="is-centered">
            <Columns.Column size={8} className="has-text-centered pb-6 mb-6">
              {booksIntroSection}
            </Columns.Column>
          </Columns>
          <Columns className="is-variable">
            <BookContainer
              image={images.smallPox}
              title={eradicationTitle.innerHtml}
            >
              {eradicationText}
              <ArrowLink
                to="/eradication-of-smallpox/chapter-one"
                className="is-size-6"
              >
                <RightIcon />
              </ArrowLink>
            </BookContainer>
            <BookContainer
              image={images.horse}
              title={meatOfTheHorseTitle.innerHtml}
            >
              {meatOfTheHorseText}
              <ArrowLink
                to="/meat-of-the-horse/chapter-one"
                className="is-size-6"
              >
                <RightIcon />
              </ArrowLink>
            </BookContainer>

            <BookContainer image={images.knock} title={attilaTitle.innerHtml}>
              {attilaText}
              <ArrowLink to="/attila/chapter-one" className="is-size-6">
                <RightIcon />
              </ArrowLink>
            </BookContainer>
            <BookContainer image={images.coming} title={fetishTitle.innerHtml}>
              {fetishText}
              <ArrowLink to="/fetish/chapter-one" className="is-size-6">
                <RightIcon />
              </ArrowLink>
            </BookContainer>
            <BookContainer image={images.jane} title={janeTitle.innerHtml}>
              {janeText}
              <Columns>
              <Columns.Column>
              <Button><a target="_blank" rel="noreferrer" href="https://www.amazon.com/Jane-Jamey-Gittings/dp/B0F2ZNGJJQ/ref=sr_1_1?crid=3MTHBSZ9K16VV&dib=eyJ2IjoiMSJ9.hCC07RK5PcucbpxfGy19sAePg39x5QD2xfpP5L8L-2HGjHj071QN20LucGBJIEps.1cffqhCiMKV3teQl-Ydus7QVzHCoTV5vwgpCOgPSoFQ&dib_tag=se&keywords=jane+jamey+gittings&qid=1744853984&sprefix=jane+jamey+gittings%2Caps%2C79&sr=8-1">Buy on Amazon</a></Button>
              </Columns.Column>
              <Columns.Column>
              <Button><a target="_blank" rel="noreferrer" href="https://www.thriftbooks.com/w/jane_jamey-gittings/55230389/all-editions/?resultid=9384ef0c-8898-4ae4-ba37-6e83fc1f3448">Buy on Thriftbooks</a></Button>
              </Columns.Column>
              </Columns>
              {/* <ArrowLink to="/fetish/chapter-one" className="is-size-6">
                <RightIcon />
              </ArrowLink> */}
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
    <Columns className="mb-6">
      <Columns.Column size="one-quarter" className="mb-6">
        <CoverImage image={src} alt={title} />
      </Columns.Column>
      <Columns.Column>
        <Heading size={4} level={4} className="mb-6">
          {title}
        </Heading>
        {children}
      </Columns.Column>
    </Columns>
  );
};
