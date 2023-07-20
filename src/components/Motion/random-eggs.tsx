"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const opacityMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const transitions = {
  y: {
    duration: 7,
    repeat: Infinity,
    repeatDelay: 2,
  },
  rotate: {
    duration: 7,
    repeat: Infinity,
    repeatDelay: 2,
  },
};

const RandomEggs = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
      <motion.div
        {...opacityMotion}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute top-[20rem] left-[15rem] w-[7rem] h-[7rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        {...opacityMotion}
        transition={{ duration: 1.4, ease: "easeIn", delay: 0.3 }}
        className="absolute top-[50%] right-[15rem] w-[10rem] h-[10rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        {...opacityMotion}
        transition={{ duration: 2, ease: "easeIn", delay: 0.7 }}
        className="absolute bottom-[10rem] left-[40%] w-[8rem] h-[8rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        {...opacityMotion}
        transition={{ duration: 2, ease: "easeIn", delay: 0.7 }}
        className="absolute top-[-1rem] left-[70%] w-[15rem] h-[15rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        {...opacityMotion}
        transition={{ duration: 2, ease: "easeIn", delay: 0.7 }}
        className="absolute bottom-[-5rem] left-[-3rem] w-[25rem] h-[25rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: "105vh", rotate: 240 }}
        transition={{ ...transitions, delay: 2 }}
        className="absolute left-[20%] w-[5rem] h-[5rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: "105vh", rotate: 340 }}
        transition={{ ...transitions, delay: 5 }}
        className="absolute left-[55%] w-[10rem] h-[10rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: "105vh", rotate: 310 }}
        transition={{ ...transitions, delay: 3 }}
        className="absolute right-[8rem] w-[5rem] h-[5rem]"
      >
        <Image src="/images/egg-illustration.svg" alt="egg illustration" fill />
      </motion.div>
    </div>
  );
};

export default RandomEggs;
