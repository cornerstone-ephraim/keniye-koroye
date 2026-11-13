import CollabPage from "@/components/story-pages/collab-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "COLLAB",
  description:
    "COLLAB is Keniye Koroye's evolving space for creative partnerships across art, design, fashion, technology, and culture.",
  path: "/collab",
});

export default function Page() {
  return <CollabPage />;
}
