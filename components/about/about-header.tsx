import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bio, personal } from "@/lib/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto grid max-w-360 gap-10 px-6 py-10 md:px-12 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
        <div className="min-w-0">
          <p className="mb-6 font-mono text-xs text-muted">
            About · {personal.location}
          </p>
          <h1 className="font-playfair text-5xl leading-[1.05] font-black tracking-normal sm:text-6xl lg:text-7xl">
            Funfere
            <br />
            Keniyē <em className="text-accent">Koroye.</em>
          </h1>
          <p className="mt-7 max-w-sm font-fraunces text-xl leading-relaxed">
            {bio.intro}
          </p>
          <Link
            href="/work"
            className={cn(
              buttonVariants({ variant: "link" }),
              "mt-6 px-0 tracking-normal no-underline",
            )}
          >
            Explore my work <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="relative mx-auto grid w-full max-w-xl gap-6 lg:pb-24">
          <figure className="w-full lg:ml-auto lg:w-4/5">
            <Image
              src="/keniye-pic.png"
              alt="Funfere Keniye Koroye wearing a motorcycle helmet, seated on a blue motorcycle"
              width={898}
              height={1198}
              priority
              sizes="(min-width: 1440px) 460px, (min-width: 1024px) 40vw, (min-width: 640px) 576px, calc(100vw - 48px)"
              className="aspect-3/4 h-auto w-full object-cover"
            />
          </figure>
          <figure className="w-full lg:absolute lg:bottom-0 lg:left-0 lg:w-1/2 lg:border-t-8 lg:border-r-8 lg:border-paper">
            <Image
              src="/images/keniye-colab.jpg"
              alt="People working among paintings and equipment in an art studio"
              width={828}
              height={828}
              sizes="(min-width: 1440px) 288px, (min-width: 1024px) 25vw, (min-width: 640px) 576px, calc(100vw - 48px)"
              className="aspect-square h-auto w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </header>
  );
}
