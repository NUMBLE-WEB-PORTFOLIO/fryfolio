import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-main flex min-h-screen flex-col items-center justify-between">
      <section id="home-interaction" className="h-screen z-10">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src="/images/eggline-cropped.svg"
            alt="계란후라이 테두리"
            fill
          />
        </div>
      </section>
    </main>
  );
}
