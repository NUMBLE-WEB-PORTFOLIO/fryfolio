"use client";

import { motion } from "framer-motion";

import { RandomEggs } from "@/components//Motion";
import { Highlight, HighlightOver, IconButton } from "@/components/Common";

const IntroductionSection = () => {
  return (
    <section className="w-full h-screen overflow-hidden pl-[25%] bg-black pb-[6rem]">
      <RandomEggs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="w-full h-screen flex flex-col gap-[5.3rem] justify-center"
      >
        <h1 className="font-black text-white text-[5.3rem] leading-[6rem] tracking-normal w-fit z-10">
          안녕하세요!
          <br />
          저는 <Highlight>김규란</Highlight>입니다
        </h1>
        <div className="flex flex-col gap-[1.5rem] font-thin text-white text-[2rem] leading-[2.5remw-fit z-10">
          <p>새로운 아이디어를 생각하고 실현하는 과정을 좋아해요.</p>
          <p>
            <HighlightOver>긍정적인 에너지</HighlightOver>
            로 세상에 이로운 것을 만들어 내고,
            <br />
            계속해서{" "}
            <HighlightOver>세상에 가치를 더해나갈 수 있는 개발자</HighlightOver>
            가 되고 싶어요.
          </p>
        </div>
        <div className="flex gap-[2rem] w-fit z-10">
          <IconButton name="github" href="https://github.com/gxxrxn" />
          <IconButton name="globe" href="https://gxxrxn.github.io" />
        </div>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
