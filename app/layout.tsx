import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://derickhoskinson.com"),
  title: {
    default: "Derick Hoskinson | Software Engineer",
    template: "%s | Derick Hoskinson",
  },
  description: "Derick Hoskinson is a software engineer specializing in modern web development, Next.js, and React.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript", "Derick Hoskinson"],
  authors: [{ name: "Derick Hoskinson", url: "https://derickhoskinson.com" }],
  creator: "Derick Hoskinson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://derickhoskinson.com",
    title: "Derick Hoskinson | Software Engineer",
    description: "Built with Next.js 15, React 19, Tailwind 4, Prisma, and Auth.js.",
    siteName: "Derick Hoskinson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derick Hoskinson | Software Engineer",
    description: "Derick Hoskinson is a software engineer specializing in modern web development, Next.js, and React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
