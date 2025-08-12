"use client";
import { Card } from "@/app/price/Interfaces/Card";
import { Check } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export interface PriceCardProps {
  card: Card;
}
export default function PriceCard({ card }: PriceCardProps) {
  const isMonth = useAppSelector((state) => state.switchPrice.isMonth);
  const prices = useAppSelector((state) => state.switchPrice.value);
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log(prices);
    if (card.name === "Базовый") setPrice(prices[0]);
    if (card.name === "Профи") setPrice(prices[1]);
    if (card.name === "Турбо") setPrice(prices[2]);
  }, [isMonth, prices]);
  return (
    <>
      <div className="flex flex-col lap:h-[87vh]   p-[10%] lap:p-[2%] gap-[2.5rem] rounded-[1rem] border-[4px] lap:border-[2px] border-gray-200 w-[93%] lap:w-[30%] m-auto mb-[5%] hover:-translate-y-4 transition-transform duration-300">
        <div className="flex flex-col items-center  gap-[1.5rem] ">
          <div
            className={`p-[5%] rounded-[2rem] ${
              card.name == "Профи"
                ? "bg-fuchsia-400"
                : card.name == "Турбо"
                ? "bg-orange-400"
                : "bg-cyan-400"
            } bg-cyan-300`}
          >
            {card.icon}
          </div>
          <div className="font-medium text-[1.1rem]">{card.name}</div>
          <div className="text-[1.3rem] font-bold">
            {price}
            <span className="text-gray-300">/месяц</span>
          </div>
          <div className="text-gray-400 font-bold w-[100%] text-[0.9rem]   text-center ">
            {card.forWhom}
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] text-[0.8rem] font-meduim">
          {card.description.map((item, index) => (
            <div key={index} className="flex gap-[1%]">
              <span>
                <Check color="green" size={18}></Check>
              </span>
              {item}
            </div>
          ))}
        </div>
        <div
          className={`w-full flex justify-center border-[1px] border-gray-200 p-[2%] rounded-[0.5rem] hover:bg-gray-200 mt-auto ${
            card.name == "Профи"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : ""
          }  `}
        >
          <button className="w-[80%] text-[0.9rem] ">Начать</button>
        </div>
      </div>
    </>
  );
}
