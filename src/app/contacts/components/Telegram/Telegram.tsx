import { Send } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Zap } from "lucide-react";
import { MessageCircle } from "lucide-react";
export default function Telegram() {
  return (
    <>
      <div className="flex flex-col p-[3%] gap-[2.5rem] border-[2px] border-blue-100 w-[95%] rounded-[1rem] shadow-xl lap:w-[85%] bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20  ">
        <div className="flex w-full gap-[2%] items-center ">
          <div className="rounded-[2rem] bg-gradient-to-r   from-blue-600 to-purple-600   flex items-center  bg-red-300  h-[55px]   ">
            <Send color="white" width={55} height={30}></Send>
          </div>
          <div className="flex flex-col gap-[0.2rem] justify-center">
            <div className="text-[1rem] lap:text-[1.2rem]">
              Быстрая связь через Telegram
            </div>
            <div className="text-[0.8rem] text-gray-400">
              Получите ответ в течение нескольких минут
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1.5rem] p-[3%]">
          {" "}
          <div className="flex gap-[3%] bg-white hover:scale-[1.01] transition-transform">
            <div className="bg-green-200 flex items-center rounded-[2rem] p-[2%]">
              <Zap color="green"></Zap>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="font-medium text-[0.8rem]">Мгновенные ответы</div>
              <div className="text-[0.7rem] text-gray-400">
                Обычно отвечаем в течение 5-10 минут
              </div>
            </div>
          </div>
          <div className="flex gap-[3%] bg-white hover:scale-[1.01] transition-transform  ">
            <div className="flex items-center rounded-[3rem] bg-blue-200 p-[2%]">
              <MessageCircle color="blue"></MessageCircle>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-medium text-[0.8rem]">
                Персональная поддержка
              </div>
              <div className="text-[0.7rem] text-gray-400">
                Прямая связь с нашими экспертами
              </div>
            </div>
          </div>
          <div className="flex gap-[3%] bg-white hover:scale-[1.02] transition-transform">
            <div className="flex items-center p-[2%] rounded-[2rem] bg-purple-200">
              <Clock4></Clock4>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="font-medium text-[0.8rem]">
                Круглосуточная доступность
              </div>
              <div className="text-[0.7rem] text-gray-400">
                Работаем 24/7 для вашего удобства
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex justify-center text-white">
              {" "}
              <button className="flex justify-center  bg-gradient-to-r from-blue-600 to-purple-600  gap-[3%] w-[90%] bg-red-300 rounded-[0.5rem] p-[2%]  hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02]">
                <Send width={15}></Send>
                <div className="text-[0.9rem] flex items-center">
                  Написать в Telegram
                </div>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-[0.5rem]  p-[3%] bg-gradient-to-r from-blue-50 to-purple-50 border-[1px] border-blue-100 rounded-[0.5rem]">
              <div className="font-medium text-[0.9rem] text-black-200">
                @your_business_account
              </div>
              <div className="text-[0.8rem] font-thin flex-justify-center">
                Или найдите нас по username в Telegram
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
