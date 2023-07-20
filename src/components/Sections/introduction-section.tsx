"use client";

import { motion } from "framer-motion";

import { EggFried, WaveText } from "@/components//Motion";
import { Highlight, IconButton } from "@/components/Common";

const IntroductionSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center overflow-hidden px-[10%] pt-[4.5rem] md:px-[15%] lg:px-[20%] md:items-start md:pb-[5rem] bg-black">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
        <EggFried className="top-[20rem] left-[10%] w-[12rem] h-[12rem]" />
        <EggFried className="invisible lg:visible bottom-[50%] right-[20rem] w-[20rem] h-[20rem]" />
        <EggFried className="invisible lg:visible bottom-[10rem] left-[40%] w-[8rem] h-[8rem]" />
        <EggFried className="invisible md:visible top-[-1rem] right-[40%] w-[15rem] h-[15rem]" />
        <EggFried className="bottom-[10rem] right-[3%] w-[15rem] h-[15rem]" />
        <EggFried className="bottom-[-5rem] left-[-3rem] w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]" />
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-[5.3rem] justify-center bg-black/40 rounded-md p-[1rem]">
        <div className="text-white font-black text-[3.5rem] md:text-[5.5rem] leading-[4rem] md:leading-[6rem] tracking-normal w-fit z-10">
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
          <p>
            새롭고 재밌는 아이디어를 생각하고 실현하는 과정을 좋아해요.
            <br />
            제가 만든 화면으로 사람들과 소통할 수 있는 웹 개발자가 되길 꿈꾸며
            <br />
            노력하고 있어요.
          </p>
          <p>
            <Highlight>긍정적인 에너지</Highlight>로 세상에 이로운 것을 만들고
            <br />
            세상에 가치를 더해나갈 수 있는 개발자가 되고 싶어요!
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
