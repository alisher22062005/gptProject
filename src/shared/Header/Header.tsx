"use client";
import BlackButton from "../BlackButton/BlackButton";
import { Brain } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/configure";
import { useAuth } from "@/app/firebase/AuthProvier";
import HeaderMob from "../HeaderMob/HeaderMob";
export default function Header() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setIsLogin(true);
      else setIsLogin(false);
    });
  }, []);

  const handleLogOut = () => {
    // setLoading(true);
    const timeOut = setTimeout(async () => {
      try {
        await signOut(auth);
        console.log("User log out");
        // setLoading(false);
      } catch (err) {
        console.log("Error to log out");
      }
    }, 2000);
  };

  return (
    <>
      <div
        className={`flex justify-center sticky top-0 z-50 bg-white  w-full p-[2%]  border-b-[3px]   border-b-gray-300 font-thin ${
          showMenu ? "bg-black/50" : "bg-black/80"
        }`}
      >
        <div className="flex  tab:w-[25%] w-full  ">
          <div className="flex w-[50%]  gap-[3%] hover:text-b1-500 hover:scale-105 transition-transform  ">
            <div className="flex items-center transition-transform duration-1000 hover:rotate-[360deg]">
              <Brain width={32} height={32}></Brain>
            </div>
            <div className="font-bold text-[1rem] flex items-center   ">
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
            className="flex items-center text-[1rem] font-light"
          >
            Главная{" "}
          </button>
          <button
            onClick={() => router.push("/api")}
            className="flex items-center  text-[1rem] font-semibold"
          >
            AI Chat{" "}
          </button>
          <button
            onClick={() => router.push("/price")}
            className="flex items-center text-[1rem] font-light"
          >
            Цены{" "}
          </button>
          <button
            onClick={() => router.push("/menu")}
            className="flex items-center text-[1rem] font-light"
          >
            Сравнение
          </button>

          <button
            onClick={() => router.push("/contacts")}
            className="flex items-center text-[1rem] font-light"
          >
            Контакты
          </button>
        </div>
        <div className="tab:flex gap-[12%] w-[20%] justify-center items-center hidden">
          <div className={`flex items-center}`}>
            {!isLogin && (
              <button
                onClick={() => router.push("/logIn")}
                className={`text-[1rem] p-[15%] pr-[20%] pl-[20%] rounded-[0.5rem] hover:bg-gray-200 hover:scale-105 transition-transform active:scale-95   font-medium`}
              >
                Войти
              </button>
            )}

            {isLogin && (
              <button
                onClick={handleLogOut}
                className={`text-[1rem] p-[15%] pr-[20%] pl-[20%] rounded-[0.5rem] hover:bg-gray-200 hover:scale-105 transition-transform active:scale-95   font-medium`}
              >
                Выйти
              </button>
            )}
          </div>
          <div
            onClick={() => router.push("sign-up")}
            className={`text-[1rem] ${isLogin ? "hidden" : ""}`}
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
