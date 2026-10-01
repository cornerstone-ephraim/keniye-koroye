"use client";

import { useState } from "react";
import Image from "next/image";

export function GTVJourneyImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden border border-rule bg-cream">
      <div
        aria-hidden="true"
        className={`image-skeleton absolute inset-0 transition-opacity duration-500 ${
          imageLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/images/keniye-gtv.jpeg"
        alt="Keniyē Koroye during his Global Talent Visa journey"
        fill
        sizes="(min-width: 408px) 360px, calc(100vw - 48px)"
        onLoad={() => setImageLoaded(true)}
        className={`object-cover object-center transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
