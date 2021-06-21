import React from "react";
import { Box } from "react-bulma-components";
import {
  Section,
  Container,
  Columns,
  Heading,
} from "react-bulma-components/esm";
import { HeadingImage } from "../HeadingImage";
import Sunflower from "../../images/sunflower.png";
import eradicationSmallPox from "../../images/eradication-small-pox.jpg";
import MeatOfTheHorse from "../../images/meat-of-the-horse-cover.png";
import KnockThreeTimes from "../../images/knock-three-times.png";
import ComingSoon from "../../images/coming-soon.png";

export const Books = ({}) => {
  return (
    <Box>
      <Section>
        <Container>
          <HeadingImage size={2} level={2} background={Sunflower}>
            My Books
          </HeadingImage>
          <Columns>
            <Columns.Column
              size={8}
              offset={2}
              className="has-text-centered pb-6 mb-6"
            >
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
          <Columns>
            <BookContainer
              image={eradicationSmallPox}
              title="On the Eradication of Smallpox and the Intractability of Raccoons"
              text="When the insouciant journalist, and recent Harvard graduate, Ned Alexander, takes the last job in town — to view and report on the execution of a death row murder— he finds himself entangled in a series of murders that mirror the killing of death row prisoners."
            />
            <BookContainer
              image={MeatOfTheHorse}
              title="Meat of the Horse"
              text="After reporting on a series of murders in India involving the trafficking of young woman and girls in the sex trade. Reporter at large, Ned Alexander, arrives in Paris for a little 4-star RR. He finds the hotel booked for him by his newspaper, is full and is booked into the 5-star Hotel Nigresko."
            />
            <BookContainer
              image={KnockThreeTimes}
              title="Knock Three Times and Ask for Attila"
              text="As the result of a gene replacement therapy experiment, fifteen adolescents with Down Syndrome, find themselves not only as smart as normal people, but far smarter —geniuses in fact. The narrator, Mason Free, chronicles the story of his personal transformation from retard to genius; documenting the progress, and underlying suspicions of the group as it becomes a shadow global intellectual force."
            />
            <BookContainer
              image={ComingSoon}
              title="Fetish"
              text="With the delivery of a cigar box containing ancient Zuni fetishes and an exquisite obsidian knife, Tasha finds herself propelled, from her comfortable existence in the New York financial world into an odyssey of spirituality, self-discovery, and magic."
            />
          </Columns>
        </Container>
      </Section>
    </Box>
  );
};

const BookContainer = ({ image, title, text }) => {
  return (
    <Columns.Column size={5} offset={1} className="mb-5">
      <Columns className="is-variable">
        <Columns.Column size={4}>
          <img
            src={image}
            width="200"
            css={`
              border: 1px solid gray;
            `}
          />
        </Columns.Column>
        <Columns.Column size={8}>
          <Heading size={4} level={4} className="mb-5">
            {title}
          </Heading>
          <p className="is-size-6 mb-6">{text}</p>
          <a href="./" className="is-size-6">
            Read More
          </a>
        </Columns.Column>
      </Columns>
    </Columns.Column>
  );
};
