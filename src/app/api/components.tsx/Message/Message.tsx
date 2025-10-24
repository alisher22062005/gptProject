import { User, Brain } from "lucide-react";
interface UserInputOutput {
  data: string;
  isInput: boolean;
}

export default function Message({ data, isInput }: UserInputOutput) {
  return (
    <>
      <div className="flex lap:w-[70%]    bg-red-30 justify-center  gap-[5%] lap:gap-[0px] ">
        {isInput && (
          <div className="w-[10%] flex justify-center ">
            <User
              size={32}
              className="rounded-[2rem] text-white bg-green-700 p-[15%] lap:h-10 lap:w-10 lap:p-[0.5rem]"
            />
          </div>
        )}
        {!isInput && (
          <div className="w-[10%] flex justify-center">
            {" "}
            <Brain
              size={32}
              className="rounded-[2rem] text-white bg-blue-700 p-[15%] lap:h-10 lap:w-10 lap:p-[0.5rem]"
            />
          </div>
        )}

        <div className="flex flex-col bg-red-30 lap:w-full w-[80%]">
          <div className="flex gap-[3%] text-[0.9rem]">
            {isInput && <div className="font-semibold">You</div>}
            {!isInput && <div className="font-semibold">AI</div>}
            <div className="text-gray-500">12:23</div>
          </div>
          <div
            className={`w-[85%]  bg-blue-300 rounded-[0.5rem] p-[3%] border-gray-300 border-[2px] ${
              isInput ? "bg-green-100" : "bg-white"
            }`}
          >
            {data}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
