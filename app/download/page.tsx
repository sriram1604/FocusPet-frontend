import React from "react";
import type { Metadata } from "next";
import { DownloadHero } from "@/components/download/DownloadHero";
import { ReleaseStatusNotice } from "@/components/download/ReleaseStatusNotice";
import { ReleaseDownloadCards } from "@/components/download/ReleaseDownloadCards";
import { BrowserCompanionCards } from "@/components/download/BrowserCompanionCards";
import { InstallationGuide } from "@/components/download/InstallationGuide";
import { ConnectionVerification } from "@/components/download/ConnectionVerification";
import { TroubleshootingFaq } from "@/components/download/TroubleshootingFaq";
import { SystemSpecs } from "@/components/download/SystemSpecs";
import { TableOfContents } from "@/components/download/TableOfContents";

export const metadata: Metadata = {
  title: "Download FocusPet & Installation Guide — Windows Desktop Companion",
  description:
    "Download FocusPet for Windows (FocusPet-Setup.exe, ~66 MB) and install the Chrome & Edge browser companions. Step-by-step developer installation guide and connection verification.",
  keywords: [
    "FocusPet download",
    "FocusPet-Setup.exe",
    "FocusPet Windows installer",
    "desktop cat companion",
    "desktop dog companion",
    "FocusPet Chrome extension",
    "FocusPet Edge extension",
    "native messaging productivity app",
    "instagram blocker windows",
    "youtube shorts blocker",
  ],
};

export default function DownloadPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Header */}
        <DownloadHero />

        {/* Main Content Layout with Sticky Right Sidebar for Desktop */}
        <div className="mt-12 flex flex-col lg:flex-row items-start gap-8 relative">
          {/* Main Documentation & Download Stream */}
          <div className="flex-1 w-full space-y-12 min-w-0">
            {/* 1. Desktop Releases */}
            <ReleaseDownloadCards />

            {/* 2. Release Status Notice */}
            <ReleaseStatusNotice />

            {/* 3. Browser Companion Downloads */}
            <BrowserCompanionCards />

            {/* 4. Step-by-Step Installation Guide */}
            <InstallationGuide />

            {/* 5. Connection Verification */}
            <ConnectionVerification />

            {/* 6. Troubleshooting FAQ */}
            <TroubleshootingFaq />

            {/* 7. System Specs & Requirements */}
            <SystemSpecs />
          </div>

          {/* Sticky 'On this page' Navigation (Desktop) */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
