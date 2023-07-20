import { EggFried } from "@/components/Motion";

const EggFriedBackground = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
      <EggFried className="top-[20rem] left-[10%] w-[12rem] h-[12rem]" />
      <EggFried className="invisible lg:visible bottom-[50%] right-[20rem] w-[20rem] h-[20rem]" />
      <EggFried className="invisible lg:visible bottom-[10rem] left-[40%] w-[8rem] h-[8rem]" />
      <EggFried className="invisible md:visible top-[-1rem] right-[40%] w-[15rem] h-[15rem]" />
      <EggFried className="bottom-[10rem] right-[3%] w-[15rem] h-[15rem]" />
      <EggFried className="bottom-[-5rem] left-[-3rem] w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]" />
    </div>
  );
};

export default EggFriedBackground;
