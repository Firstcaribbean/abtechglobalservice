import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AB TECH GLOBAL SERVICE | Reliable Solutions. Exceptional Service.",
  description:
    "Premium Nigerian technology and digital service company offering web design, printing, online registration, documentation, branding, and computer services in Bida, Niger State.",
  keywords: [
    "AB TECH GLOBAL SERVICE",
    "Bida tech company",
    "Niger State website design",
    "printing services",
    "portfolio website creation",
    "online registration Nigeria",
    "digital services"
  ],
  openGraph: {
    title: "AB TECH GLOBAL SERVICE",
    description: "Reliable Solutions. Exceptional Service.",
    url: "https://abtechglobalservice.vercel.app",
    siteName: "AB TECH GLOBAL SERVICE",
    locale: "en_NG",
    type: "website"
  },
  metadataBase: new URL("https://abtechglobalservice.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
