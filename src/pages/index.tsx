import React from "react";
import { HomeLayout } from "../components/layouts/homeLayout";
import { HomepageHero } from "../components/HomepageHero";
import feather from "../images/feather.png";
import sunflower from "../images/sunflower.png";
import { Books } from "../components/Books";
import { AboutJamey } from "../components/AboutJamey";
import { AttilaPress } from "../components/AttilaPress";
import { WhatICareAbout } from "../components/WhatICareAbout";
import { WhatIWantFromReaders } from "../components/WhatIWantFromReaders";
import { OtherOfferings } from "../components/OtherOfferings";

const Page = () => {
  return (
    <HomeLayout hero={<HomepageHero />}>
      <AboutJamey />
      <AttilaPress background={feather} />
      <WhatICareAbout background={sunflower} />
      <WhatIWantFromReaders background={feather} />
      <Books background={sunflower} />
      <OtherOfferings background={feather} />
    </HomeLayout>
  );
};

export default Page;
