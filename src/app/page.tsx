import Image from "next/image";

import { EggYork } from "@/components/Motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#fff]"></div>
        <div className="absolute top-[-10px] left-0 bottom-0 w-full h-srceen overflow-hidden z-10">
          <Image
            src="/images/eggline-filled.svg"
            alt="background egg"
            style={{
              objectFit: "cover",
              objectPosition: "calc(50% - 2rem) bottom",
            }}
            className="min-w-[104%] min-h-[104%]"
            fill
            priority
          />
        </div>
        <EggYork />
      </section>
      <section className="h-screen z-10 bg-main-dark">안녕</section>
    </main>
  );
}
