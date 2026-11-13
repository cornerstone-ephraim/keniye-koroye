import { AboutHeader } from "./about-header";
import { AboutStory } from "./about-story";
import { AboutBackground } from "./about-background";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <AboutHeader />
      <AboutStory />
      <AboutBackground />
    </div>
  );
}
