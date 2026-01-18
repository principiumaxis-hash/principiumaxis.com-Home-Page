import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Principium Axis - Decentralized Product Factory",
  description: "Build products, validate fast, scale winners. Launch MVPs on Nostr, validate with Lightning zaps, crowdfund successful products.",
  keywords: ["Nostr", "Lightning", "Bitcoin", "OAuth", "SSO", "Decentralized", "Product Factory"],
  openGraph: {
    title: "Principium Axis - Decentralized Product Factory",
    description: "Build products, validate fast, scale winners. Launch MVPs on Nostr, validate with Lightning zaps.",
    type: "website",
    url: "https://principiumaxis.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Principium Axis - Decentralized Product Factory",
    description: "Build products, validate fast, scale winners.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
