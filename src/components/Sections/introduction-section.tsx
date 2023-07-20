"use client";

import { motion } from "framer-motion";

import { RandomEggs, WaveText } from "@/components//Motion";
import { Highlight, IconButton } from "@/components/Common";

const IntroductionSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center overflow-hidden px-[15%] lg:px-[20%] md:items-start pb-[5rem] bg-black">
      <RandomEggs />
      <div className="relative w-fit h-fit flex flex-col gap-[5.3rem] justify-center bg-black/40 rounded-md p-[1rem]">
        <div className="text-white font-black text-[3.5rem] md:text-[5.3rem] leading-[4rem] md:leading-[6rem] tracking-normal w-fit z-10">
          <WaveText text="안녕하세요!" />
          <WaveText
            text="저는 김규란입니다"
            highlight={{ text: "김규란", color: "text-yellow-800" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            type: "spring",
            damping: 12,
            stiffness: 200,
          }}
          className="flex flex-col gap-[1.5rem] font-thin text-white text-[2rem] leading-[2.5rem] w-fit z-10"
        >
          <p>새로운 아이디어를 생각하고 실현하는 과정을 좋아해요.</p>
          <p>
            <Highlight>긍정적인 에너지</Highlight>로
            <br />
            세상에 이로운 것을 만들어 내고
            <br />
            <Highlight>세상에 가치를 더해나갈 수 있는 개발자</Highlight>가 되고
            싶어요.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            damping: 10,
            stiffness: 200,
          }}
          className="flex gap-[2rem] w-fit z-10"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton name="github" href="https://github.com/gxxrxn" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton name="globe" href="https://gxxrxn.github.io" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
