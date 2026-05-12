import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Nischal Shakya — Software Engineer",
    template: "%s | Nischal Shakya",
  },
  description:
    "Full-stack Software Engineer specialising in PHP, JavaScript, and modern data engineering. Currently pursuing MRes in Cyber Security.",
  metadataBase: new URL("https://nischal-shakya.vercel.app"),
  openGraph: {
    title: "Nischal Shakya — Software Engineer",
    description:
      "Full-stack Software Engineer. PHP, React, Magento, Pimcore, and the modern data stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
