import { Brain, MessageSquare } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
export default function Counter() {
  const counter = useSelector((state: RootState) => state.inputOutput.requests);
  console;
  return (
    <>
      <div className="flex border-b-[3px]  border-gray-300 ">
        <div className="flex w-full lap:w-[70%] p-[3%] lap:p-[2%] lap:ml-[5%]  gap-[3%]">
          <Brain
            size={45}
            className=" text-white rounded-[0.5rem] p-[2%] lap:p-[0.5rem] bg-gradient-to-br from-blue-500 to-indigo-600"
          />
          <div className="flex flex-col">
            <div className="text-[1.1rem] lap:text-[1.3rem] font-semibold">
              AI Чат-Ассистент
            </div>
            <div className="text-[0.8rem] lap:text-[0.9rem]">
              Умный помощник на базе GPT Plus
            </div>
          </div>
        </div>
        <div className="hidden lap:flex items-center lap:gap-[3%] lap:w-[20%] text-gray-500">
          <MessageSquare size={20} />
          <div>{counter.length}</div>
          <div>Requests</div>
        </div>
      </div>
    </>
  );
}
