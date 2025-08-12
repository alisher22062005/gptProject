"use client";
import BlackButton from "../BlackButton/BlackButton";
import { Brain } from "lucide-react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
// import MenuButton from "../MenuButton/MenuButton";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center sticky top-0 z-50 bg-white  w-full p-[2%] border-b-[1px] border-b-gray-300 font-thin">
        <div className="flex gap-[5%] tab:w-[20%] w-full ">
          <div className="flex items-center">
            <Brain width={35} height={35}></Brain>
          </div>
          <div className="font-bold text-[1.2rem] flex items-center ">
            AI Plus
          </div>
          <div className="tab:hidden ml-[50%] flex items-center">
            <Menu></Menu>
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
          <button className="flex items-center text-[0.9rem] font-light">
            Сравнение
          </button>
          <button className="flex items-center text-[0.9rem] font-light">
            О нас
          </button>
          <button className="flex items-center text-[0.9rem] font-light">
            Контакты
          </button>
        </div>
        <div className="tab:flex gap-[12%] w-[20%] justify-center items-center hidden">
          <div className="flex items-center  ">
            <button
              onClick={() => router.push("/logIn")}
              className="text-[0.9rem] p-[15%] pr-[20%] pl-[20%] rounded-[0.5rem] hover:bg-gray-200   font-medium"
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
