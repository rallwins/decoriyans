import type { Metadata } from "next";
import { SITE_CONFIG } from "@/types";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-50 text-earth-900 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
