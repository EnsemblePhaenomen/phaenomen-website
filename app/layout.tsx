import type { Metadata } from "next";
import { Geist, Geist_Mono, Nova_Cut, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import DynamicHeader from "./Components/Header/DynamicHeader";
import { HeaderProvider } from "./contexts/HeaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const novaCut = Nova_Cut({
  weight: "400",
  variable: "--font-nova-cut",
  subsets: ["latin"],
});

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-sans-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ensemble-phaenomen.eu"),
  title: {
    default: "Ensemble Phænomen | Musique baroque allemande",
    template: "%s | Ensemble Phænomen",
  },
  description:
    "Ensemble Phænomen, dirigé par Noé Chapolard, explore la musique baroque allemande du XVIIIe siècle à travers concerts, captations et projets musicologiques.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ensemble-phaenomen.eu",
    title: "Ensemble Phænomen | Musique baroque allemande",
    description:
      "Ensemble baroque dirigé par Noé Chapolard, dédié aux cantates et œuvres de Stölzel et Bach.",
    siteName: "Ensemble Phænomen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensemble Phænomen | Musique baroque allemande",
    description:
      "Ensemble baroque dirigé par Noé Chapolard, dédié aux cantates et œuvres de Stölzel et Bach.",
  },
  icons: {
    icon: [
      { url: "/LOGO_ROSE_SVG.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/LOGO_ROSE_SVG.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${novaCut.variable} ${firaSansCondensed.variable} antialiased`}
        suppressHydrationWarning
      >
        <HeaderProvider>
          <DynamicHeader />
          {children}
        </HeaderProvider>
      </body>
    </html>
  );
}
