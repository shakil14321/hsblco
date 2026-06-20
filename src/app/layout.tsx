import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// @ts-expect-error: side-effect CSS import without type declarations
import "./globals.css";
// @ts-expect-error: side-effect CSS import without type declarations
import "./custom.css";
// @ts-expect-error: side-effect CSS import without type declarations
import "./clip-path.css";
// @ts-expect-error: side-effect CSS import without type declarations
import "./responsive-clip-path.css";
// @ts-expect-error: side-effect CSS import without type declarations
import "./responsive.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BackToTop from "@/utils/BackToTop";
import SectionBackground from "@/components/common/SectionBackground/SectionBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HSBLCO LLC. | Driving Digital Success",
  description:
    "Advanced AI Solutions, Blockchain, and Custom Software Engineering for Modern Enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased relative font-sans`} > 
      <SectionBackground />
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}