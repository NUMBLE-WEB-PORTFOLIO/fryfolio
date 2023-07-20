"use client";

import type { Variants, HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  highlight?: { text: string; color: string };
  delay?: number;
  duration?: number;
}

const WaveText = ({
  text,
  highlight,
  delay = 0,
  duration = 0.05,
  className,
  ...props
}: Props) => {
  const letters = Array.from(text, (letter) => ({
    letter,
    match: highlight?.text.includes(letter) || false,
  }));

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.p
      className={`flex overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map(({ letter, match }, index) => (
        <motion.span
          key={index}
          variants={child}
          className={match ? highlight!.color : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default WaveText;
