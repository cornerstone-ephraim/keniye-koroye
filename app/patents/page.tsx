import PatentsPage from "@/components/story-pages/patents-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Patents",
  description:
    "Explore TekGlove by Keniye Koroye: a modular wearable platform for movement, grip and gesture, with product concepts and registered-design documentation.",
  path: "/patents",
});

export default function Page() {
  return <PatentsPage />;
}
