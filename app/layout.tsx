import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar/navbar";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/ui/LoadingScreen";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { RouteScrollReset } from "@/components/layout/route-scroll-reset";
import {
  Playfair_Display,
  DM_Mono,
  Fraunces,
  Noto_Sans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Keniyē — Product Manager, Developer & Researcher",
    template: "%s | Keniyē",
  },
  description:
    "Funfere Keniyē Koroye is a certified Product Manager and Design Engineer with expertise in Industrial, Service, and UX design. Global Talent Visa recipient. Based in London.",
  keywords: [
    "Product Manager",
    "Product Developer",
    "UX Researcher",
    "Funfere Koroye",
    "Keniye",
    "Product Design",
    "London",
    "Tech Nation",
    "Global Talent Visa",
    "Cradle Health",
    "Nupe Energy",
  ],
  authors: [{ name: "Funfere Keniyē Koroye", url: "https://www.koroye.com" }],
  creator: "Funfere Keniyē Koroye",
  metadataBase: new URL("https://www.koroye.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.koroye.com",
    title: "Keniye — Product Manager, Developer & Researcher",
    description:
      "Funfere Keniyē Koroye is a certified Product Manager and Design Engineer. Global Talent Visa recipient. Building impactful technology from London.",
    siteName: "Keniye Portfolio",
    images: [
      {
        url: "https://www.koroye.com/keniye-og.png",
        width: 2000,
        height: 2000,
        alt: "Keniyē — Product Manager, Developer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keniyē — Product Manager, Developer & Researcher",
    description:
      "Funfere Keniyē Koroye is a certified Product Manager and Design Engineer. Global Talent Visa recipient. Building impactful technology from London.",
    creator: "@keniyekoroye",
    images: ["https://www.koroye.com/keniye-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/keniye-og.png",
    apple: "/keniye-og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        playfairDisplay.variable,
        dmMono.variable,
        fraunces.variable,
        notoSans.variable,
      )}
    >
      <body className="overflow-x-hidden">
        <RouteScrollReset />
        <SplashScreen>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
