import Image from "next/image";

const ProjectCardDadok = () => {
  return (
    <article className="w-[45rem] h-[37rem] bg-[#322926] overflow-hidden relative rounded-[0.5rem]">
      <figure className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[15%]">
        <Image
          src="/images/project/dadok.png"
          width={230}
          height={500}
          alt="다독다독"
        />
      </figure>
    </article>
  );
};

export default ProjectCardDadok;
