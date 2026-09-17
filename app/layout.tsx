import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundDecorations } from "@/components/BackgroundDecorations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "FocusPet",
    "desktop companion",
    "focus companion",
    "productivity pet",
    "virtual pet windows",
    "distraction blocker",
    "instagram limit",
    "youtube shorts limit",
    "desktop pet",
  ],
  authors: [{ name: SITE_CONFIG.developer.name }],
  creator: SITE_CONFIG.developer.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: "https://github.com/sriram1604",
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: "/images/Focuspet.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-950 flex flex-col relative overflow-x-hidden">
        {/* Floating background cute scattered logos & paws */}
        <BackgroundDecorations />

        {/* Global sticky navbar */}
        <Navbar />

        {/* Dynamic page content */}
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
