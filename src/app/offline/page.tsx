"use client";

import Image from "next/image";
import Link from "next/link";

import { IconHome } from "@/public/icons";

export default function Offline() {
  return (
    <div className="w-screen h-screen flex flex-col bg-white justify-center gap-[3rem]">
      <Image
        width="120"
        height="200"
        src="/images/corn.png"
        alt="주의"
        className="self-center"
      />
      <p className=" whitespace-pre-line self-center text-center font-bold text-[3rem]">
        {`네트워크 연결상태를
          확인해주세요!`}
      </p>
      <Link className="self-center" href="/">
        <button className="flex gap-[1rem] items-center px-[2.5rem] py-[1rem] bg-yellow-800 rounded-full text-white font-bold text-[1.8rem]">
          <IconHome className="w-[2.3rem] h-auto" />
          <span>홈으로</span>
        </button>
      </Link>
    </div>
  );
}
