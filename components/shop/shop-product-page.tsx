import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import { shopProducts, type ShopProduct } from "@/lib/shop";

type ShopProductPageProps = {
  slug: string;
};

export function ShopProductPage({ slug }: ShopProductPageProps) {
  const product = shopProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = shopProducts.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <ShopProductHero product={product} />
      <ShopProductGallery product={product} />
      {product.specsImage ? <ShopProductSpecs product={product} /> : null}
      <ShopProductCta product={product} />
      <RelatedShopProducts products={relatedProducts} />
    </div>
  );
}

function ShopProductHero({ product }: { product: ShopProduct }) {
  return (
    <section className="border-b-[3px] border-double border-ink">
      <div className="grid min-h-[calc(100svh-3.5625rem)] px-6 md:grid-cols-[1.08fr_0.92fr] md:px-12">
        <FadeIn direction="right" className="min-h-full">
          <div className="relative aspect-square min-h-full border-b border-rule bg-cream md:border-r md:border-b-0">
            <Image
              src={product.image}
              alt={`${product.name} by Keniye Koroye`}
              fill
              priority
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <div className="flex min-h-full flex-col justify-between py-8 md:py-12 md:pl-12">
          <FadeIn delay={0.08} direction="none">
            <Link
              href="/shop"
              className="mb-12 inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase no-underline transition-colors hover:text-accent"
            >
              <BsArrowLeft aria-hidden="true" />
              Back To Shop
            </Link>

            <p className="mb-4 font-mono text-[0.6rem] tracking-[0.22em] text-accent uppercase">
              {product.category}
            </p>
            <h1
              className="max-w-full font-playfair leading-[0.92] font-black -tracking-[0.02em] text-wrap break-words"
              style={{ fontSize: "clamp(3rem, 5.7vw, 5.75rem)" }}
            >
              {product.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="mt-10 max-w-xl space-y-6 md:mt-0">
              <p className="font-fraunces text-[1.05rem] leading-[1.75] text-muted italic md:text-[1.25rem]">
                {product.description}
              </p>
              <a
                href={product.enquiryHref}
                className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 hover:bg-accent"
              >
                Enquire About This Object
                <BsArrowRight aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ShopProductGallery({ product }: { product: ShopProduct }) {
  if (product.gallery.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-rule px-6 py-10 md:px-12 md:py-14">
      <FadeIn delay={0.08}>
        <div className="mb-8 grid gap-4 md:grid-cols-[minmax(10rem,18rem)_1fr]">
          <p className="font-mono text-[0.6rem] tracking-[0.22em] text-accent uppercase">
            Object Views
          </p>
          <p className="max-w-2xl text-[0.8rem] leading-[1.85] text-muted md:text-[0.9rem]">
            Additional views showing the object&apos;s form, surface, and
            relationship to the spaces it was made for.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {product.gallery.map((image, index) => (
          <FadeIn key={image} delay={0.1 + index * 0.06}>
            <div className="relative aspect-square overflow-hidden border border-rule bg-cream">
              <Image
                src={image}
                alt={`${product.name} view ${index + 1}`}
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ShopProductSpecs({ product }: { product: ShopProduct }) {
  if (!product.specsImage) {
    return null;
  }

  return (
    <section className="border-b border-rule px-6 py-10 md:px-12 md:py-14">
      <div className="grid gap-8 md:grid-cols-[minmax(10rem,18rem)_1fr] md:gap-14">
        <FadeIn delay={0.08}>
          <div className="md:sticky md:top-24">
            <p className="font-mono text-[0.6rem] tracking-[0.22em] text-accent uppercase">
              Technical Sheet
            </p>
            <p className="mt-4 max-w-56 text-[0.76rem] leading-[1.8] text-muted">
              A closer look at the object&apos;s proportions, construction, and
              specification notes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <a
            href={product.specsImage}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden border border-rule bg-cream no-underline"
            aria-label={`Open ${product.name} technical sheet`}
          >
            <div className="relative aspect-square">
              <Image
                src={product.specsImage}
                alt={`${product.name} technical sheet`}
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-contain"
              />
            </div>
          </a>
          <a
            href={product.specsImage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.18em] text-ink uppercase no-underline transition-colors hover:text-accent"
          >
            Open Full Specification
            <BsArrowRight aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function ShopProductCta({ product }: { product: ShopProduct }) {
  return (
    <section className="border-b border-rule px-6 py-10 text-center md:px-12 md:py-14">
      <FadeIn delay={0.08}>
        <p className="mx-auto max-w-lg font-fraunces text-[1.2rem] leading-[1.7] text-muted italic md:text-[1.5rem]">
          Interested in availability, pricing, or commissioning a related
          object?
        </p>
        <a
          href={product.enquiryHref}
          className="mt-7 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 hover:bg-accent"
        >
          Send An Enquiry
          <BsArrowRight aria-hidden="true" />
        </a>
      </FadeIn>
    </section>
  );
}

function RelatedShopProducts({ products }: { products: ShopProduct[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-10 md:px-12 md:py-14">
      <FadeIn delay={0.08}>
        <div className="mb-8 flex items-center gap-4">
          <p className="font-mono text-[0.6rem] tracking-[0.22em] text-accent uppercase">
            More Objects
          </p>
          <span className="h-px flex-1 bg-rule" />
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product, index) => (
          <FadeIn key={product.slug} delay={0.12 + index * 0.06}>
            <Link
              href={`/shop/${product.slug}`}
              className="group grid gap-5 no-underline md:grid-cols-[10rem_1fr]"
            >
              <div className="relative aspect-square overflow-hidden border border-rule bg-cream">
                <Image
                  src={product.image}
                  alt={`${product.name} by Keniye Koroye`}
                  fill
                  sizes="10rem"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="self-end">
                <h2 className="font-playfair text-[1.35rem] leading-tight font-black text-ink">
                  {product.name}
                </h2>
                <p className="mt-1 font-mono text-[0.58rem] tracking-[0.18em] text-accent uppercase">
                  {product.category}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
