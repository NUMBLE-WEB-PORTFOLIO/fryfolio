"use client";

import { motion } from "framer-motion";

const CircleLine = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      width="81"
      height="45"
      viewBox="0 0 81 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        d="M76.1708 5.14436C60.8225 5.05009 45.5518 3.56062 30.2052 3.66423C24.5485 3.70242 18.9063 4.32634 13.4702 5.71997C10.1928 6.56016 7.45718 7.31417 5.177 9.66698C1.78386 13.1682 -0.258625 18.953 1.86718 23.4322C4.97841 29.9878 11.2059 33.3257 18.0816 36.5067C26.2738 40.2967 35.0996 42.6679 44.337 43.4633C50.7261 44.0133 57.2973 44.1325 63.7125 43.858C67.5152 43.6952 71.3873 43.0359 74.4973 40.9635C80.405 37.0268 81.4493 29.6156 78.1418 24.09C75.741 20.0792 72.1005 16.8121 68.3983 13.7291C62.7884 9.05743 56.7273 4.86011 50.3988 1"
        stroke="black"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="221.957"
      ></motion.path>
    </motion.svg>
  );
};

export default CircleLine;
