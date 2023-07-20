"use client";

import { motion } from "framer-motion";

import { RandomEggs, WaveText } from "@/components//Motion";
import { HighlightOver, IconButton } from "@/components/Common";

const IntroductionSection = () => {
  return (
    <section className="w-full h-screen overflow-hidden pl-[25%] bg-black pb-[6rem]">
      <RandomEggs />
      <div className="w-full h-screen flex flex-col gap-[5.3rem] justify-center">
        <div className="text-white font-black text-[5.3rem] leading-[7rem] tracking-normal w-fit z-10">
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
            <HighlightOver>긍정적인 에너지</HighlightOver>
            로 세상에 이로운 것을 만들어 내고,
            <br />
            계속해서{" "}
            <HighlightOver>세상에 가치를 더해나갈 수 있는 개발자</HighlightOver>
            가 되고 싶어요.
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
          <IconButton name="github" href="https://github.com/gxxrxn" />
          <IconButton name="globe" href="https://gxxrxn.github.io" />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
