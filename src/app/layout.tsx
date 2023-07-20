import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

const pretendard = localFont({
  src: [
    {
      path: "./_fonts/PretendardStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./_fonts/PretendardStd-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/PretendardStd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/PretendardStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

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
      <body className={`${pretendard.className} bg-main-dark`}>{children}</body>
    </html>
  );
}
