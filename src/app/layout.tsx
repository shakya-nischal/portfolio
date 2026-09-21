import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalThemeToggle } from "@/components/global-theme-toggle";

export const metadata: Metadata = {
  title: {
    default:
      "Nischal Shakya | Software Engineer | Data Engineering & Analytics",
    template: "%s | Nischal Shakya",
  },
  description:
    "Portfolio of Nischal Shakya, a Software Engineer with 3+ years of professional experience in web, eCommerce, APIs, and system integration, expanding into Data Engineering and Analytics through SQL, data warehousing, Power BI, Excel, and Python.",
  keywords: [
    "Nischal Shakya",
    "Software Engineer",
    "Data Engineer",
    "Data Analyst",
    "Data Engineering",
    "Data Analytics",
    "SQL",
    "SQL Server",
    "T-SQL",
    "ETL",
    "Data Warehousing",
    "Power BI",
    "Excel",
    "Python",
    "PHP",
    "Pimcore",
    "Magento 2",
    "React",
    "UK",
  ],
  authors: [{ name: "Nischal Shakya" }],
  creator: "Nischal Shakya",
  metadataBase: new URL("https://portfolio-iota-eight-s7tpcpzd95.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://nischal-shakya.vercel.app",
    title: "Nischal Shakya | Software Engineer | Data Engineering & Analytics",
    description:
      "Software engineering, data engineering, analytics, and research projects by Nischal Shakya.",
    siteName: "Nischal Shakya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nischal Shakya | Software Engineer | Data Engineering & Analytics",
    description:
      "Software engineering, data engineering, analytics, and research projects by Nischal Shakya.",
  },
  robots: {
    index: true,
    follow: true,
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
          <GlobalThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
