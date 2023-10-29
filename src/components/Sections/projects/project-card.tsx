"use client";

import { PropsWithChildren } from "react";

import { ColorEgg } from "@/components/Common";
import { Variants, motion } from "framer-motion";

const themes = {
  dadok: {
    backgroundColor: "bg-[#FFC073]",
    colors: ["#FFD480", "#FF8282"] as [string, string],
  },
  pomo: {
    backgroundColor: "bg-[#FBF2CF]",
    colors: ["#A1C298", "#1B1B1B"] as [string, string],
  },
  collusic: {
    backgroundColor: "bg-[#B1FF00]",
    colors: ["#D7B1FA", "#ED6774"] as [string, string],
  },
  ontheway: {
    backgroundColor: "bg-[#FBDF3B]",
    colors: ["#9CEA87", "#687FFB"] as [string, string],
  },
} as const;

interface ProjectCardProps {
  name: keyof typeof themes;
  className?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0.1 },
  visible: { opacity: 1 },
  zoom: { scale: 1.1 },
};

const ProjectCard = ({
  name,
  className = "",
  children,
}: PropsWithChildren<ProjectCardProps>) => {
  const { backgroundColor, colors } = themes[name];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="zoom"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ amount: 0.4 }}
      className={`sm:w-[40rem] sm:h-[31rem] w-[28rem] h-[21.5rem] ${className} ${backgroundColor} rounded-[0.5rem] z-[10] absolute cursor-pointer`}
    >
      <span className="w-[5.3rem] h-[5.3rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <ColorEgg color={colors} />
      </span>
      <motion.article className="w-full h-full overflow-hidden relative">
        {children}
      </motion.article>
    </motion.div>
  );
};

export default ProjectCard;
