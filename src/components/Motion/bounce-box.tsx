"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

type BounceBoxProps = PropsWithChildren<{
  className?: string;
  repeat?: number;
}>;

const BounceBox = ({
  className,
  repeat = Infinity,
  children,
}: BounceBoxProps) => {
  return (
    <motion.div
      whileInView={{
        y: ["5px", "-5px", "5px"],
      }}
      transition={{
        y: {
          duration: 0.8,
          repeat: repeat,
        },
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BounceBox;
