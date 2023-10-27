import Header from "@/components/Header";
import { EggInteractionSection } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header activeItem="Project" />
      <main className="w-full h-[100dvh] min-h-screen">
        <EggInteractionSection />
        <section className="h-[100dvh] z-10 bg-[#fff]">Section 2</section>
      </main>
    </>
  );
}
