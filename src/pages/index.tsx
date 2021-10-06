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

const Page = () => {
  return (
    <HomeLayout hero={<HomepageHero />}>
      <AboutJamey />
      <WhatIWantFromReaders />
      <AttilaPress background={fadedLogo} />
      <WhatICareAbout />

      <Books />
      <OtherOfferings />
    </HomeLayout>
  );
};

export default Page;
