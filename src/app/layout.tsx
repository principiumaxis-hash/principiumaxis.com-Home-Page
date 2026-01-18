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
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Principium Axis - Decentralized Product Factory",
    description: "Build products, validate fast, scale winners. Launch MVPs on Nostr, validate with Lightning zaps.",
    type: "website",
    url: "https://principiumaxis.com",
    siteName: "Principium Axis",
    images: [
      {
        url: "https://principiumaxis.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Principium Axis - Build products, validate fast, scale winners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Principium Axis - Decentralized Product Factory",
    description: "Build products, validate fast, scale winners.",
    images: ["https://principiumaxis.com/og-image.png"],
  },
  metadataBase: new URL("https://principiumaxis.com"),
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
