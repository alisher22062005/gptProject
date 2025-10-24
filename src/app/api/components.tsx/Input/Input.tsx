import { sendRequest } from "@/store/Slices/InputOutput/InputOutput";
import { Send } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    dispatch(sendRequest({ input: input, output: data.reply }));
    setInput("");
  };
  return (
    <>
      <div className="flex  justify-center  p-[5%] gap-[3%] lap:p-[2%]">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[80%] pl-[1%] active:border-gray-200 bg-gray-50 rounded-[0.5rem] border-gray-300 border-[3px] lap:w-[70%]"
          placeholder=" Write your question here.."
        ></textarea>
        <div className="flex items-center w-[13%] ">
          <Send
            onClick={sendMessage}
            className="p-[20%] rounded-[0.5rem] bg-gradient-to-r from-blue-600 to-purple-600 text-white  hover:scale-105 transition-transform duration-200 lap:p-[0.8rem] lap:h-12 lap:w-18"
            size={45}
          />
        </div>
      </div>
    </>
  );
}
