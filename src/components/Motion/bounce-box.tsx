"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

type BounceBoxProps = PropsWithChildren<{
  className?: string;
}>;

const BounceBox = ({ className, children }: BounceBoxProps) => {
  return (
    <motion.div
      animate={{
        y: ["5px", "-5px", "5px"],
      }}
      transition={{
        y: {
          duration: 0.8,
          repeat: Infinity,
        },
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BounceBox;
