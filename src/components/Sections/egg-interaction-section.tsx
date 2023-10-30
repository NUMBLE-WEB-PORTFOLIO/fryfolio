import Image from "next/image";

import { EggYork as AnimatedEggYork, BounceBox } from "@/components/Motion";

const EggInteractionSection = () => {
  return (
    <section className="w-full h-full overflow-hidden flex justify-center relative min-h-[100dvh]">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#fff]"></div>
      <div className="absolute top-[-10px] left-0 right-0 bottom-0 w-full h-srceen overflow-hidden z-10">
        <Image
          src="/images/eggline-filled.svg"
          alt="background egg"
          className="relative sm:scale-[104%] overflow-hidden object-cover"
          fill
        />
      </div>
      <AnimatedEggYork />
      <BounceBox className="self-end mb-[2rem]">
        <Image
          src="/images/arrow-down.svg"
          alt="scroll down"
          width="20"
          height="41"
        />
      </BounceBox>
    </section>
  );
};

export default EggInteractionSection;
