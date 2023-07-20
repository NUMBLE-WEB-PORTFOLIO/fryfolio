"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EggFried = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
      className={`absolute w-[12rem] h-[12rem] ${className}`}
    >
      <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
    </motion.div>
  );
};

export default EggFried;
