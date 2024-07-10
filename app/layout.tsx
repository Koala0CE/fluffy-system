import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cx } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteMetaData } from "@/utils/siteMetaData";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title, // a default is required when creating a template
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_UK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetaData.title,
    images: [siteMetaData.socialBanner], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-manrope bg-white dark:bg-black"
        )}
      >
        <Script id="theme-script">
          {`if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
