import BlackButton from "@/shared/BlackButton/BlackButton";
import { Brain } from "lucide-react";

export default function Get() {
  return (
    <>
      <div className="flex flex-col pt-[10%] items-center gap-[2rem] text-[0.9rem] font-normal bg-gradient-to-b from-gray-50 to-white">
        <div className="bg-white p-[2%] rounded-[5rem] shadow-lg">
          <Brain width={80} height={80}></Brain>
        </div>
        <div>Умный ИИ начинается здесь</div>
        <div className="tab:max-w-[35%]  w-[95%] text-center text-gray-500">
          Получите доступ к новейшим моделям GPT Plus — быстро, надежно и
          доступно. Испытайте возможности искусственного интеллекта нового
          поколения без премиальной цены.
        </div>
        <div className="flex gap-[5%] w-full justify-center">
          <BlackButton
            content="Получить GPT Plus"
            padL="pl-[3%]"
            padR="pr-[3%]"
            pad="p-[3%] tab:py-[1%]"
            textSize="text-[0.8rem]"
          ></BlackButton>

          <button className="border-[1px] p-[3%] tab:py-[1%]  rounded-[0.5rem] text-[0.8rem] font-medium border-gray-200 hover:bg-gray-100">
            Сравнить версии
          </button>
        </div>
      </div>
    </>
  );
}
