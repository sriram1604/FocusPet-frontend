export interface NavItem {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: "FocusPet",
  tagline: "Your Desktop Focus Companion",
  description:
    "A cute desktop companion that helps you control time spent on distracting websites — without getting in your way.",
  developer: {
    name: "Sriram Venkatesan",
    role: "Creator & Developer",
    github: "https://github.com/sriram1604",
    linkedin: "https://www.linkedin.com/in/sriram-venkatesan-85433a260/",
    instagram: "https://www.instagram.com/_srx_.rzm_/",
  },
  // Centralized download configuration & Google Drive release locations
  downloads: {
    mainFolderUrl:
      process.env.NEXT_PUBLIC_FOCUSPET_DOWNLOAD_URL ||
      "https://drive.google.com/drive/folders/1tPV5FQr1SMjrkNsqzOxQcPFiqtLTWpP3",
    extensionFolderUrl:
      process.env.NEXT_PUBLIC_FOCUSPET_EXTENSIONS_URL ||
      "https://drive.google.com/drive/folders/1U7WUXbSLRxRBmlUofVLLrsyJVDVIqWUi",
    installerFilename: "FocusPet-Setup.exe",
    installerSize: "~66 MB",
    chromeExtensionFilename: "FocusPet-Chrome-Extension.zip",
    edgeExtensionFilename: "FocusPet-Edge-Extension.zip",
    productionExtensionId: "cbiieeckgmfhfopdmcapaggocmnfgaii",
  },
  // Backward compatibility alias for downloadUrl
  get downloadUrl() {
    return this.downloads.mainFolderUrl;
  },
  releaseStatus: {
    desktopApp: "Available (Standard Windows Installer)",
    chromeExtension: "Manual / Unpacked testing (Pre-release)",
    edgeExtension: "Manual / Unpacked testing (Pre-release)",
    chromeWebStore: "Not published yet",
    edgeAddons: "Not published yet",
    windows: "Windows 10 / 11 (64-bit)",
    browserExtension: "Manual unpacked installation for testing",
  },
  navItems: [
    { label: "Features", href: "/features" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Companions", href: "/companions" },
    { label: "Privacy", href: "/privacy" },
    { label: "Download", href: "/download" },
    { label: "Developer", href: "/developer" },
  ] as NavItem[],
  supportedPlatforms: ["Windows 10", "Windows 11 (64-bit)"],
  supportedDistractions: ["Instagram", "YouTube Shorts"],
  supportedBrowsers: ["Google Chrome", "Microsoft Edge", "Brave", "Opera"],
};
