import Image from "next/image";

import { Circle } from "@/components/Motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-light ">
      <section id="home-interaction" className="h-screen z-10">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src="/images/eggline-cropped.svg"
            alt="계란후라이 테두리"
            fill
          />
        </div>
        <div className="absolute top-[40%] left-[10%]">
          <Circle />
        </div>
      </section>
    </main>
  );
}
