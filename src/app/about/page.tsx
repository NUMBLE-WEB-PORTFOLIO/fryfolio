import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Header activeItem="About" />
      <main>About 페이지</main>
    </>
  );
}
