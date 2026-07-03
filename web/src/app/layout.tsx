import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { SITE_CONFIG } from "@/types";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_CONFIG.domain}`),
  title: {
    default: `${SITE_CONFIG.name} — Handcrafted Treasures`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "handcrafted",
    "artisan",
    "ecommerce",
    "pottery",
    "textiles",
    "woodwork",
    "jewelry",
    "home decor",
    "handmade gifts",
  ],
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: `https://${SITE_CONFIG.domain}`,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [{ url: SITE_CONFIG.logo, alt: SITE_CONFIG.name }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="bg-brand-gradient-soft text-earth-900 antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
