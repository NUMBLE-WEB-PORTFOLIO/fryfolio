import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fryfolio",
  description: "developer kyurankim portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-main-dark`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
