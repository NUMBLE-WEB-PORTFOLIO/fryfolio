"use client";

import { motion } from "framer-motion";

const CIRCLE_BASE_CLASSES =
  "lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] w-[10rem] h-[10rem] bg-main rounded-[50%]";

const Circle = () => {
  return <motion.div className={`${CIRCLE_BASE_CLASSES}`} />;
};

export default Circle;
