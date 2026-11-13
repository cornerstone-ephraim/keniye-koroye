import { HomePortraitHero } from "./home-portrait-hero";

import { HomeSelectedWork } from "./home-selected-work";

export default function HomePage() {
  return (
    <div className="bg-paper pt-14.25">
      <HomePortraitHero />
      <HomeSelectedWork />
    </div>
  );
}
