import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Nischal Shakya — Software Engineer",
    template: "%s | Nischal Shakya",
  },
  description:
    "Full-stack Software Engineer specialising in PHP, JavaScript, and modern data engineering. Currently pursuing MRes in Cyber Security.",
  metadataBase: new URL("https://portfolio-iota-eight-s7tpcpzd95.vercel.app"),
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
