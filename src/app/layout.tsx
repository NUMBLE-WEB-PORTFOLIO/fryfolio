import type { Metadata } from "next";
import localFont from "next/font/local";

import ServiceWorkerProvider from "@/pwa/service-worker-provider";
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
  themeColor: "#ffc211",
  icons: {
    other: [
      {
        url: "/icons/splashscreens/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} bg-main-dark w-screen h-[100dvh] min-h-screen overflow-x-hidden`}
      >
        <ServiceWorkerProvider>{children}</ServiceWorkerProvider>
      </body>
    </html>
  );
}
