import type { Metadata } from "next";

import Header from "@/components/Header";
import { IntroductionSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Header activeItem="About" mode="light" />
      <main className="w-screen h-[100dvh] relative">
        <IntroductionSection />
      </main>
    </>
  );
}
