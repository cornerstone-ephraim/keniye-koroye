"use client";

import Initials from "@/components/ui/Initials";
import { ContactDetails } from "./contact-details";
import { ContactResponseTime } from "./contact-response-time";

export function ContactLayout() {
  return (
    <div className="grid min-h-125 grid-cols-1 px-6 md:grid-cols-2 md:px-12">
      <div className="hidden md:block">
        <Initials />
      </div>

      <div className="max-w-2xl py-10 md:py-14 md:pl-12">
        <ContactDetails />
        <ContactResponseTime />
      </div>
    </div>
  );
}
