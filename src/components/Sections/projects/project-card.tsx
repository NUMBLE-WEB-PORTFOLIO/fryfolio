"use client";

import Link from "next/link";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Variants, motion } from "framer-motion";

import {
  IconCollusicLogo,
  IconDadokLogo,
  IconFryfoliokLogo,
  IconOnthewayLogo,
  IconPomoLogo,
} from "@/public/icons";
import { ColorEgg, HighlightOver, IconButton } from "@/components/Common";
import Modal from "@/components/Common/modal";

import PROJECTS from "@/constants/project";

type ProjectType = "dadok" | "fryfolio" | "pomo" | "collusic" | "ontheway";

type ProjectInfo = {
  logo: ReactNode;
  title: string;
  introduction: string;
  skills: string[];
  sideInformations: string[];
  descriptions: (string | { text: string; href: string })[];
  links: { webpage?: string; github?: string; video?: string };
};

const themes = {
  dadok: {
    logo: <IconDadokLogo />,
    backgroundColor: "bg-[#FFC073]",
    colors: ["#FBF2CF", "#FF8282"] as [string, string],
  },
  fryfolio: {
    logo: <IconFryfoliokLogo />,
    backgroundColor: "bg-[#FFF1DD]",
    colors: ["#000000", "#FFB84E"] as [string, string],
  },
  pomo: {
    logo: <IconPomoLogo />,
    backgroundColor: "bg-[#FBF2CF]",
    colors: ["#A1C298", "#1B1B1B"] as [string, string],
  },
  collusic: {
    logo: <IconCollusicLogo className="fill-black" />,
    backgroundColor: "bg-[#B1FF00]",
    colors: ["#D7B1FA", "#ED6774"] as [string, string],
  },
  ontheway: {
    logo: <IconOnthewayLogo />,
    backgroundColor: "bg-[#FBDF3B]",
    colors: ["#9CEA87", "#687FFB"] as [string, string],
  },
} as const;

interface ProjectCardProps {
  name: ProjectType;
  className?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0.1 },
  visible: { opacity: 1 },
  zoom: { scale: 1.05 },
};

const ProjectCard = ({
  name,
  className = "",
  children,
}: PropsWithChildren<ProjectCardProps>) => {
  const [open, setOpen] = useState(false);
  const { backgroundColor, colors, logo } = themes[name];
  const { ...projectInfo } = PROJECTS[name];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="zoom"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ amount: 0.4 }}
      className={`lg:w-[39rem] lg:h-[31rem] w-[28rem] h-[21.5rem] ${className} ${backgroundColor} rounded-[0.5rem] z-[10] absolute cursor-pointer`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="w-[5.3rem] h-[5.3rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <ColorEgg color={colors} />
      </span>
      <article className="w-full h-full overflow-hidden relative">
        {children}
      </article>
      {open && (
        <DetailProjectModal
          open={open}
          setOpen={setOpen}
          logo={logo}
          {...projectInfo}
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;

const DetailProjectModal = ({
  open,
  setOpen,
  ...projectInfo
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
} & ProjectInfo) => {
  const {
    title,
    introduction,
    skills,
    sideInformations,
    descriptions,
    links,
    logo,
  } = projectInfo;

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <LogoBox>{logo}</LogoBox>

      <div className="flex flex-col gap-[0.5rem]">
        <Title text={title} />
        <Introduction text={introduction} />
        <div className="flex gap-[0.5rem] flex-wrap">
          {skills.map((skill, id) => (
            <Badge key={id} text={skill} />
          ))}
        </div>
      </div>

      <div>
        {sideInformations.map((info, id) => (
          <SideInformation key={id} text={info} />
        ))}
      </div>

      <div className="flex flex-col gap-[0.7rem]">
        {descriptions.map((description, id) =>
          typeof description === "string" ? (
            <Description key={id} text={description} />
          ) : (
            <HighlightOver key={id}>
              <Link href={description.href} target="_blank">
                <Description text={description.text} />
              </Link>
            </HighlightOver>
          )
        )}
      </div>

      <Links {...links} />
    </Modal>
  );
};

const LogoBox = ({ children }: { children?: ReactNode }) => (
  <span className="w-[7rem] h-[7rem] bg-white flex justify-center items-center rounded-[0.3rem]">
    <span className="w-[4.5rem] h-auto">{children}</span>
  </span>
);

const Title = ({ text }: { text: string }) => (
  <h2 className="text-[3.4rem] font-bold ">{text}</h2>
);

const Introduction = ({ text }: { text: string }) => (
  <p className="text-[1.6rem] font-normal">{text}</p>
);

const Badge = ({ text }: { text: string }) => (
  <span className="inline-flex h-[1.8rem] px-[1rem] py-[1.2rem] text-[1.2rem] font-light border-yellow-800 border bg-yellow-800/40 rounded-full justify-center items-center">
    {text}
  </span>
);

const SideInformation = ({ text }: { text: string }) => (
  <p className="text-[1.5rem] text-[#a1a1a1]">{text}</p>
);

const Description = ({ text }: { text: string }) => (
  <p className=" leading-snug text-[1.6rem]">{text}</p>
);

const Links = ({
  webpage,
  github,
  video,
}: {
  webpage?: string;
  github?: string;
  video?: string;
}) => (
  <div className="flex gap-[1.5rem] flex-wrap items-center">
    {github && (
      <div className="w-[3.5rem] h-[3.5rem]">
        <IconButton name="github" href={github} />
      </div>
    )}
    {webpage && (
      <div className="w-[3.5rem] h-[3.5rem]">
        <IconButton name="globe" href={webpage} />
      </div>
    )}
    {video && (
      <div className="w-[3.5rem] h-auto">
        <IconButton name="video" href={video} />
      </div>
    )}
  </div>
);
