import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Sparkles } from "lucide-react";
import Message from "../Message/Message";
export default function Output() {
  const selector = useSelector(
    (state: RootState) => state.inputOutput.requests
  );

  return (
    <>
      <div className="relative h-[100vh] w-full pb-[8%] pt-[5%]   scrollbar-hide   overflow-y-auto scroll-smooth flex flex-col   gap-[5rem] bg-gray-50 items-center lap:pb-[3%]  ">
        {selector?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  gap-[1.5rem] lap:flex-ro bg-blue-30 w-full justify-center items-center"
          >
            <Message isInput={true} data={item.input}></Message>
            <Message isInput={false} data={item.output}></Message>
          </div>
        ))}
        {selector.length == 0 && (
          <div className="flex flex-col items-center gap-[2rem] text-[0.8rem]">
            <div className="flex flex-col items-center gap-[1rem]">
              <Sparkles
                size={50}
                className="bg-blue-500 rounded-[0.5rem] text-white lap:h-18 lap:w-18 p-[2%]"
              />
              <div className="text-[1.2rem] font-semibold lap:text-[1.3rem]">
                Начните беседу с AI
              </div>
              <div className="w-[85%] lap:w-[65%] text-center text-[0.9rem] text-gray-500 lap:text-[1rem]">
                Задайте любой вопрос, и я постараюсь дать вам максимально
                полезный и подробный ответ
              </div>
            </div>
          </div>
        )}
        {/* <div className="absolute bottom-0 left-0 w-full bg-gray-50 border-t border-gray-300">
          <Input />
        </div> */}
      </div>
    </>
  );
}
