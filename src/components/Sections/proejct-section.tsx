"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProjectPath from "../Motion/project-path";
import ProjectCard from "./projects/project-card";
import { BounceBox } from "../Motion";

const ProjectSection = () => {
  return (
    <section className="bg-white relative overflow-visible h-[206rem] w-full">
      <ProjectPath />
      <DadokCard />
      <FryfolioCard />
      <PomoCard />
      <CollusicCard />
      <OnthewayCard />
    </section>
  );
};

const DadokCard = () => (
  <ProjectCard name="dadok" className=" top-[21.9rem] left-[15vw]">
    <motion.figure
      initial={{ x: "-50%", y: "30%" }}
      whileInView={{ x: "-50%", y: "-25%" }}
      transition={{ duration: 0.3 }}
      className="absolute left-1/2 top-1/2"
    >
      <Image
        className="rounded-[0.5rem]"
        src="/images/project/dadok.png"
        width={200}
        height={434}
        alt="다독다독"
        priority
      />
    </motion.figure>
  </ProjectCard>
);

const FryfolioCard = () => (
  <ProjectCard name="fryfolio" className="top-[50rem] right-[10vw]">
    <motion.figure
      initial={{ x: "-50%", y: "-45%" }}
      whileInView={{ rotate: [0, -5, 0, 5, 0] }}
      transition={{ repeat: 2 }}
      className="absolute left-1/2 top-1/2 w-[70%] h-auto"
    >
      <Image
        src="/images/project/fryfolio.svg"
        width={361}
        height={246}
        alt="뽀모"
        priority
      />
    </motion.figure>
  </ProjectCard>
);

const PomoCard = () => (
  <ProjectCard name="pomo" className="top-[83rem] left-[10vw]">
    <figure className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <BounceBox repeat={2} className="w-[9rem] h-auto sm:w-full">
        <Image
          src="/images/project/pomo.png"
          width={130}
          height={113}
          alt="뽀모"
          priority
        />
      </BounceBox>
    </figure>
  </ProjectCard>
);

const CollusicCard = () => (
  <ProjectCard name="collusic" className="top-[115rem] right-[20vw]">
    <div className="flex gap-[1rem] absolute top-1/2 -translate-y-1/2 -translate-x-1">
      <figure className="relative sm:w-[30rem] sm:h-[20.4rem] w-[24rem] h-auto">
        <Image
          src="/images/project/collusic1.png"
          alt="collusic-main"
          width={300}
          height={204}
        />
      </figure>
      <figure className="relative sm:w-[36.2rem] sm:h-[20.4rem] w-[29rem] h-auto">
        <Image
          src="/images/project/collusic2.png"
          alt="collusic-detail"
          width={362}
          height={204}
        />
      </figure>
    </div>
  </ProjectCard>
);

const OnthewayCard = () => (
  <ProjectCard name="ontheway" className="top-[164rem] right-[42vw]">
    <figure className="absolute top-1/2 -translate-y-1/2">
      <Image
        src="/images/project/jmt-c.gif"
        alt="jmt"
        width={450}
        height={255}
        className="scale-[1.05]"
      />
    </figure>
  </ProjectCard>
);

export default ProjectSection;
