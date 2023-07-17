import Image from "next/image";

import { Circle } from "@/components/Motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-light ">
      <section id="home-interaction" className="h-screen z-10">
        <div className="absolute top-0 left-0 bottom-[1rem] w-full h-srceen overflow-hidden">
          <Image
            src="/images/eggline.svg"
            alt="background"
            objectFit="cover"
            objectPosition="calc(50% - 2rem) bottom"
            className="min-w-[104%]"
            fill
            priority
          />
        </div>
        <div className="absolute top-[40%] left-[10%]">
          <Circle />
        </div>
      </section>
    </main>
  );
}
