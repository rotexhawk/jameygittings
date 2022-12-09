import React from "react";
import { Heading } from "react-bulma-components";
import styled from "styled-components";
import { EradicationChapter } from "../../components/EradicationChapter";

const HeadingWrapper = styled.div`
  margin: 4rem 0;
`;

const Foreword = () => {
  return (
    <EradicationChapter page={1}>
      <HeadingWrapper>
        JG, July 2021
        <Heading
          size={4}
          renderAs="h4"
          style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}
        >
          Foreword
        </Heading>
      </HeadingWrapper>
      <p>
        I wrote the first pages of this novel over 20 years ago when I still had
        faith in progress. Since then, faith is no longer my default. At the
        time of writing, two of my greatest heroes were John Lewis and Robert
        Moses, who were folded into the narrative. Moses as a rough model for
        Bob More, the protagonist’s half-brother, and Lewis as the name for
        More’s dog, named after his own personal hero. The references were meant
        as a tribute to both men. Since then, the two have become icons in our
        present turbulence, Lewis becoming as close to a saint for us secular
        folks as we have. In the publication of this second edition, I have had
        cause to question the appropriateness of the inclusion of these men.
        Upon reflection, I have kept both in place. First, because they play
        important parts in the original story and to remove them out of a faux
        veneration would weaken the intent of the tale. Second, they were
        written with a respect and tribute that has not changed. It would grieve
        me if either would view this as a form of disrespect. I believe the
        storyline is as relevant today as when it was first begun twenty years
        ago and first published eleven years later.
      </p>
    </EradicationChapter>
  );
};

export default Foreword;
