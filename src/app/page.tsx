import Header from "@/components/Header";
import { EggInteractionSection } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header activeItem="Project" />
      <main className="w-screen min-h-screen flex flex-col">
        <EggInteractionSection />
        <section className="h-screen z-10 bg-[#fff]">Section 2</section>
      </main>
    </>
  );
}
