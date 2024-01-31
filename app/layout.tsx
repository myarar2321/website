import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Sellix from "@/components/Sellix";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quality Leaks",
  description: "the highest quality collection of leaks all in one place.",
  icons: "/logowebsite.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sellix />
        {children}
      </body>
    </html>
  );
}
