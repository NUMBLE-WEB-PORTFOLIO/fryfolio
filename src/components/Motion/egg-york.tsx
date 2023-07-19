"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { useFollowPointer } from "@/hooks";

const YORK_BASE_CLASSES =
  "absolute lg:w-[28rem] lg:h-[28rem] md:w-[18rem] md:h-[18rem] w-[15rem] h-[15rem] rounded-full bg-gradient-york shadow-york";

const EggYork = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        damping: 5,
        stiffness: 50,
        restDelta: 0.005,
      }}
      className={`${YORK_BASE_CLASSES} ${className}`}
    />
  );
};

export default EggYork;
