import { Send } from "lucide-react";
export default function Telegram2() {
  return (
    <>
      {" "}
      <div className="flex flex-col w-[95%] border-[2px] rounded-[0.5rem] p-[5%] gap-[1.5rem]  bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100 ">
        <div className="flex justify-center items-center  ">
          <Send
            className="  h-[80px] bg-gradient-to-r from-blue-600 to-purple-600   rounded-[10rem] p-[7%]   w-[87px] "
            color="white"
          ></Send>
        </div>
        <div className="flex justify-center font-bold">Готовы начать?</div>
        <div className="text-center text-[0.9rem] font-thin ">
          Напишите нам в Telegram прямо сейчас и получите персональную
          консультацию
        </div>
        <div className="flex justify-center w-full  ">
          <button className="flex hover:bg-blue-50 items-center w-[75%]  bg-white p-[3%] border-[2px] border-blue-300  rounded-[1rem] gap-[3%] justify-center  ">
            <Send></Send>
            <div className="text-[0.9rem] font-semibold">Открыть телеграмм</div>
          </button>
        </div>
      </div>
    </>
  );
}
