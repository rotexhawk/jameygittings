import React from "react";
import { HomeLayout } from "../components/layouts/homeLayout";
import { HomepageHero } from "../components/HomepageHero";
// import feather from "../images/feather.png";
// import sunflower from "../images/sunflower.png";
import fadedLogo from "../images/logo-title-background-two.png";
import { Books } from "../components/Books";
import { AboutJamey } from "../components/AboutJamey";
import { AttilaPress } from "../components/AttilaPress";
import { WhatICareAbout } from "../components/WhatICareAbout";
import { WhatIWantFromReaders } from "../components/WhatIWantFromReaders";
import { OtherOfferings } from "../components/OtherOfferings";
import { graphql } from "gatsby";
import { blockTextGetter, toBlockHtml } from "../utils/helpers";

const Page = ({ data }) => {
  const { wpPage } = data;

  const getBlockHtml = (beginningBlock: string, endingBlock: string) => {
    const getBlockText = blockTextGetter(wpPage.blocks);
    return toBlockHtml(getBlockText(beginningBlock, endingBlock));
  };

  return (
    <HomeLayout hero={<HomepageHero />}>
      <AboutJamey>
        {getBlockHtml("about-jamey", "what-i-want-from-readers")}
      </AboutJamey>
      <WhatIWantFromReaders>
        {getBlockHtml("what-i-want-from-readers", "what-i-care-about")}
      </WhatIWantFromReaders>
      <AttilaPress background={fadedLogo} />
      <WhatICareAbout>
        {getBlockHtml("what-i-care-about", "my-books")}
      </WhatICareAbout>

      <Books blocks={blockTextGetter(wpPage.blocks)("my-books")} />
      <OtherOfferings />
    </HomeLayout>
  );
};

export const pageQuery = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      ...pageFields
      blocks {
        id
        innerHtml
        tagName
        type
        attributes {
          name
          value
        }
      }
    }
  }
`;

export default Page;
