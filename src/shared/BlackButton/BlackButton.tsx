"use client";
import { useRouter } from "next/navigation";
interface Black {
  pad?: string;
  padL?: string;
  padR?: string;
  content: string;
  textSize?: string;
  w?: string;
  url?: string;
}

export default function BlackButton({
  pad,
  padL,
  padR,
  content,
  textSize,
  w,
  url,
}: Black) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push(`${url}`)}
        className={` ${pad} ${padL} ${padR} ${textSize} ${w} bg-gradient-to-r from-blue-600 to-purple-600  text-white rounded-[0.5rem] font-medium hover:scale-105 transition-transform duration-200 active:scale-100`}
      >
        {content}
      </button>
    </>
  );
}
