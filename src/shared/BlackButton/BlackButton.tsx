interface Black {
  pad?: string;
  padL?: string;
  padR?: string;
  content: string;
  textSize?: string;
  w?: string;
}

export default function BlackButton({
  pad,
  padL,
  padR,
  content,
  textSize,
  w,
}: Black) {
  return (
    <>
      <button
        className={` ${pad} ${padL} ${padR} ${textSize} ${w} bg-gradient-to-r from-blue-600 to-purple-600  text-white rounded-[0.5rem] font-medium hover:scale-105 transition-transform duration-200 `}
      >
        {content}
      </button>
    </>
  );
}
