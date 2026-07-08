import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://rext.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rext — One App. Infinite Possibilities.",
    template: "%s — Rext",
  },
  description:
    "Rext is an extensible media platform powered by secure extensions.",
  keywords: [
    "Rext",
    "iOS",
    "media platform",
    "extensions",
    "open source",
    "Swift",
    "SwiftUI",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Rext",
    title: "Rext — One App. Infinite Possibilities.",
    description:
      "Rext is an extensible media platform powered by secure extensions.",
    images: [
      {
        url: "/logos/rext-logo.png",
        width: 1024,
        height: 1024,
        alt: "Rext logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rext — One App. Infinite Possibilities.",
    description:
      "Rext is an extensible media platform powered by secure extensions.",
    images: ["/logos/rext-logo.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
