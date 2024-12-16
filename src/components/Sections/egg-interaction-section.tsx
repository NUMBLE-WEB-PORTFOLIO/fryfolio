import Image from "next/image";

import { EggYork, BounceBox } from "@/components/Motion";

const EggInteractionSection = () => {
  return (
    <section className="w-full h-full overflow-hidden relative min-h-[100dvh] flex justify-center">
      {/** White Background */}
      <div className="absolute inset-0 m-0 bg-white"></div>

      {/** Point Following EggYork */}
      <EggYork />

      {/** Egg Background Top Path */}
      <svg
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 lg:-top-[8rem] left-0 right-0 w-full overflow-hidden z-10 "
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M406.933 98.5167C348.86 103.054 233.425 112.072 196.35 173.868C145.782 258.155 95.6768 293.909 0 327.876V0H825.423C785.432 9.55066 744.306 23.2744 701.977 37.3995C615.434 66.2782 523.865 96.8344 426.704 96.8344C421.335 97.3914 414.639 97.9146 406.933 98.5167ZM1440 289.086C1397.64 240.372 1343.55 200.326 1282.09 173.868C1164.11 123.082 1129.41 86.1945 1102.49 57.5757C1080.06 33.7283 1063.03 15.6221 1007.71 0H1440V289.086Z"
          fill="#FFF1DD"
        />
      </svg>

      {/** Egg Background Bottom Path */}
      <svg
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 lg:-bottom-[5rem] left-0 right-0 w-full overflow-hidden z-10 "
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1440 777.247V1024H0V853.918C57.3309 920.559 144.72 970.728 272.84 985.094C756.273 1039.3 1216.09 1012.2 1428.56 789.658C1432.49 785.545 1436.3 781.407 1440 777.247Z"
          fill="#FFF1DD"
        />
      </svg>

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
