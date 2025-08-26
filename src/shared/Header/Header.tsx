"use client";
import BlackButton from "../BlackButton/BlackButton";
import { Brain } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import HeaderMob from "../HeaderMob/HeaderMob";
export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);
  return (
    <>
      <div
        className={`flex justify-center sticky top-0 z-50 bg-white  w-full p-[2%] border-b-[1px] border-b-gray-300 font-thin ${
          showMenu ? "bg-black/50" : ""
        }`}
      >
        <div className="flex  tab:w-[25%] w-full  ">
          <div className="flex w-[50%]  gap-[3%] hover:text-blue-500 hover:scale-105 transition-transform  ">
            <div className="flex items-center transition-transform duration-1000 hover:rotate-[360deg]">
              <Brain width={32} height={32}></Brain>
            </div>
            <div className="font-bold text-[1.1rem] flex items-center   ">
              AI Plus
            </div>
          </div>

          <div
            onClick={() => setShowMenu(!showMenu)}
            className="tab:hidden w-[65%]  flex items-center justify-end "
          >
            <HeaderMob></HeaderMob>
          </div>
        </div>

        <div className="hidden gap-[5%] w-[50%] justify-center tab:flex">
          <button
            onClick={() => router.push("/menu")}
            className="flex items-center text-[0.9rem] font-light"
          >
            Главная{" "}
          </button>
          <button
            onClick={() => router.push("/price")}
            className="flex items-center text-[0.9rem] font-light"
          >
            Цены{" "}
          </button>
          <button
            onClick={() => router.push("/menu")}
            className="flex items-center text-[0.9rem] font-light"
          >
            Сравнение
          </button>

          <button
            onClick={() => router.push("/contacts")}
            className="flex items-center text-[0.9rem] font-light"
          >
            Контакты
          </button>
        </div>
        <div className="tab:flex gap-[12%] w-[20%] justify-center items-center hidden">
          <div className="flex items-center  ">
            <button
              onClick={() => router.push("/logIn")}
              className="text-[0.9rem] p-[15%] pr-[20%] pl-[20%] rounded-[0.5rem] hover:bg-gray-200 hover:scale-105 transition-transform active:scale-95   font-medium"
            >
              Войти
            </button>
          </div>
          <div
            onClick={() => router.push("sign-up")}
            className=" text-[0.8rem]    "
          >
            <BlackButton
              content="Регистрация"
              pad="p-[10%]"
              padL="pl-[20%]"
              padR="pr-[20%]"
            ></BlackButton>
          </div>
        </div>
      </div>
    </>
  );
}
