import Image from "next/image";

const IntroductionSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center gap-[5.3rem] overflow-hidden pl-[25%] bg-black pb-[6rem]">
      <h1 className="font-black text-white text-[5.3rem] leading-[6rem] tracking-normal">
        안녕하세요!
        <br />
        저는 <span className="text-yellow-800">김규란</span>입니다
      </h1>
      <div className="flex flex-col gap-[1.5rem] font-light text-white text-[2rem] leading-[2.5rem]">
        <p>새로운 아이디어를 생각하고 실현하는 과정을 좋아해요.</p>
        <p>
          긍정적인 에너지로 세상에 이로운 것을 만들어 내고,
          <br />
          계속해서 세상에 가치를 더해나갈 수 있는 개발자가 되고 싶어요.
        </p>
      </div>
      <div className="flex gap-[2.5rem]">
        <Image src="/images/github.svg" width="40" height="39" alt="github" />
        <Image src="/images/globe.svg" width="40" height="40" alt="blog" />
      </div>
    </section>
  );
};

export default IntroductionSection;
