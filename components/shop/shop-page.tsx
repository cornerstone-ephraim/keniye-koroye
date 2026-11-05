import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/lib/profile";
import { shopProducts, type ShopProduct } from "@/lib/shop";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ShopPage() {
  const featuredProduct = shopProducts[0];
  const hasStoreUrl = Boolean(personal.shopUrl);

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <ShopHero product={featuredProduct} />
      <ShopIntro hasStoreUrl={hasStoreUrl} />
      <ShopCatalogue products={shopProducts} />
    </div>
  );
}

function ShopHero({ product }: { product: ShopProduct }) {
  return (
    <section
      className="relative isolate flex min-h-120 items-end overflow-hidden bg-ink text-paper"
      style={{ height: "calc(90svh - 3.5625rem)" }}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/shop/rive/shop-rive-hero.jpeg"
          alt="Rive sculptural table and stool in an interior space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_70%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-linear-to-t from-ink/90 via-ink/30 to-transparent"
      />
      <div className="flex w-full items-end justify-between gap-6 px-6 pt-20 pb-8 md:px-12 md:pb-12">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs text-paper/80">{product.name}</p>
          <h1 className="font-playfair text-4xl leading-tight font-bold tracking-normal sm:text-5xl lg:text-6xl">
            Collectibles by Keniyē.
          </h1>
          <p className="mt-4 max-w-lg font-fraunces text-base leading-relaxed text-paper/90 md:text-lg">
            Sculptural objects shaped through material culture and local
            manufacturing.
          </p>
        </div>
        <a
          href="#shop-objects"
          aria-label="Explore the collection"
          title="Explore the collection"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "mb-1 size-12 shrink-0 text-paper hover:bg-paper/15 hover:text-paper md:size-16 [&_svg]:size-8",
          )}
        >
          <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function ShopIntro({ hasStoreUrl }: { hasStoreUrl: boolean }) {
  return (
    <section className="grid gap-8 border-b border-rule px-6 py-8 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-10">
      <FadeIn delay={0.08}>
        <p className="font-mono text-[0.62rem] tracking-[0.22em] text-accent uppercase">
          Current Catalogue
        </p>
      </FadeIn>

      <FadeIn delay={0.14}>
        <div className="max-w-3xl space-y-4 text-[0.8rem] leading-[1.9] text-muted md:text-[0.9rem]">
          <p>
            Explore the stories, photographs, and specifications of each object.
            Enquire directly about a piece through its product page.
          </p>
          {hasStoreUrl ? (
            <a
              href={personal.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] text-ink uppercase underline underline-offset-6 transition-colors hover:text-accent"
            >
              Visit Store
              <BsArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </FadeIn>
    </section>
  );
}

function ShopCatalogue({ products }: { products: ShopProduct[] }) {
  return (
    <section
      id="shop-objects"
      className="scroll-mt-20 border-b border-rule px-6 py-12 md:px-12 md:py-16"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(10rem,16rem)_1fr] md:gap-16">
        <FadeIn delay={0.08} className="md:sticky md:top-24 md:self-start">
          <div className="border-t border-rule pt-4">
            <div className="flex items-center justify-between gap-6 font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              <span>Objects</span>
              <span className="text-muted">{products.length}</span>
            </div>
            <p className="mt-6 max-w-52 text-[0.76rem] leading-[1.8] text-muted">
              Limited furniture pieces and prototypes from Keniye&apos;s object
              practice.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {products.map((product, index) => (
            <ShopProductCard
              key={product.slug}
              product={product}
              delay={0.12 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopProductCard({
  product,
  delay,
}: {
  product: ShopProduct;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <article className="group">
        <Link
          href={`/shop/${product.slug}`}
          className="block overflow-hidden border border-rule bg-cream no-underline"
          aria-label={`View ${product.name}`}
        >
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={`${product.name} by Keniye Koroye`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h2 className="font-playfair text-[1.45rem] leading-tight font-black md:text-[1.65rem]">
              {product.name}
            </h2>
            <p className="mt-1 font-mono text-[0.58rem] tracking-[0.18em] text-accent uppercase">
              {product.category}
            </p>
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="mt-1 inline-flex shrink-0 items-center gap-2 font-mono text-[0.6rem] tracking-[0.16em] text-ink uppercase no-underline transition-colors hover:text-accent"
          >
            View
            <BsArrowRight aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-xl text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
          {product.description}
        </p>
      </article>
    </FadeIn>
  );
}
