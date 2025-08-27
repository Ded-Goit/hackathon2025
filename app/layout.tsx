import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

/**export const metadata: Metadata = {
  title: "ШОТОООООООООО",
  description: "ШОТОООООООООО",
  keywords: [
    "ШОТОООООООООО",
    "ШОТОООООООООО",
    "procrastination",
    "motivation",
    "time management",
    "ШОТОООООООООО",
    "ШОТОООООООООО",
  ],
  authors: [{ name: "ШОТОООООООООО" }],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://hackathon2025-beta.vercel.app/"),
  openGraph: {
    title: "ШОТОООООООООО",
    description: "ШОТОООООООООО",
    url: "https://hackathon2025-beta.vercel.app/",
    siteName: "ШОТОООООООООО",
    type: "website",
    images: [
      {
        url: "https://my-book-site-nine.vercel.app/og/hackathon.png",
        width: 1200,
        height: 630,
        alt: "ШОТОООООООООО",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ШОТОООООООООО",
    description: "ШОТОООООООООО",
    images: ["https://my-book-site-nine.vercel.app/og/hackathon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

//  viewport  окремо
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <link rel="canonical" href="https://hackathon2025-beta.vercel.app/" />

        
        <meta property="og:title" content="ШОТОООООООООО" />
        <meta property="og:description" content="ШОТОООООООООО" />
        <meta
          property="og:image"
          content="https://my-book-site-nine.vercel.app/og/hackathon.png"
        />
        <meta
          property="og:url"
          content="https://hackathon2025-beta.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ШОТОООООООООО" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ШОТОООООООООО" />
        <meta name="twitter:description" content="ШОТОООООООООО" />
        <meta
          name="twitter:image"
          content="https://my-book-site-nine.vercel.app/og/hackathon.png"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} */
export const metadata: Metadata = {
  metadataBase: new URL("https://hackathon2025-beta.vercel.app"),
  title: {
    default: "Твій час. Твій ритм. Твій асистент.",
    template: "%s — Ши Помічник",
  },
  description:
    "Платформа продуктивності: планувальник, фокус-таймер, мікроуроки, аналітика та спільнота.",
  keywords: [
    "продуктивність",
    "тайм-менеджмент",
    "Pomodoro",
    "планувальник",
    "focus",
    "мікроуроки",
  ],
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Ши Помічник",
    title: "Твій час. Твій ритм. Твій асистент.",
    description:
      "Платформа продуктивності з інструментами та навчанням без зайвого шуму.",
    url: "https://hackathon2025-beta.vercel.app/",
    images: [
      {
        url: "/og/hackathon.png", // поклади файл у public/og/hackathon.png
        width: 1200,
        height: 630,
        alt: "Ши Помічник — продуктивність без шуму",
      },
    ],
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ши Помічник",
    description:
      "Плануй, фокусуйся, навчайся. Інструменти та мікроуроки для результатів.",
    images: ["/og/hackathon.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://hackathon2025-beta.vercel.app/",
    languages: {
      "uk-UA": "https://hackathon2025-beta.vercel.app/uk",
      "en-US": "https://hackathon2025-beta.vercel.app/en",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
