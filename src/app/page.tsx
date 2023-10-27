import Header from "@/components/Header";
import { EggInteractionSection } from "@/components/Sections";
import ProjectSection from "@/components/Sections/proejct-section";

export default function Home() {
  return (
    <>
      <Header activeItem="Project" />
      <main className="w-screen h-[100dvh] min-h-screen">
        <EggInteractionSection />
        <ProjectSection />
      </main>
    </>
  );
}
