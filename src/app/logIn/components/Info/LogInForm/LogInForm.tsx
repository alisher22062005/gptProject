"use client";
import Input from "@/shared/Input/Input";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/configure";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/firebase/AuthProvier";
export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (user) console.log("User:", user);
    else console.log("Not logIN");
  }, [user, loading]);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => router.push("menu"))
      .catch((err) => {
        console.log("You have wrong password or email");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col mt-[10%] lap:mt-[5%]   gap-[0.5rem] w-full items-center pb-[10%] lap:pb-[5%] ">
        <div className="w-[93%] lap:w-[38%] border-[2px] p-[5%] lap:p-[4%]  border-gray-300 gap-[1rem] bg-white flex flex-col rounded-[1rem] ">
          {" "}
          <div className="flex justify-center">С возвращением</div>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex flex-col font-medium  ml-[5%] w-full">
              <div>Email адрес</div>

              <Input
                change={setEmail}
                value={email}
                placeHolder="Введите ваш email"
              ></Input>
            </div>
            <div className="flex flex-col ml-[5%] w-full font-medium">
              <div>Пароль</div>

              <Input
                change={setPassword}
                value={password}
                placeHolder="Введите пароль"
              ></Input>
            </div>
            <div className="flex justify-start w-full ml-[5%] ">
              <button
                onClick={handleSignIn}
                className="border-2px  w-[90%] bg-black text-white p-[1%] hover:bg-gray-900 rounded-[0.5rem] hover:scale-105 transition-transform active:scale-100 "
              >
                Войти
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[2%]">
            <div className="flex items-center justify-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">Демо аккаунт</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-[0.1rem] items-center">
              <div className="text-gray-600 font-medium">
                Email:{" "}
                <span className="text-gray-400 font-normal">
                  demo@aiplus.com
                </span>
              </div>
              <div className="text-gray-600 font-medium">
                Пароль:{" "}
                <span className="text-gray-400 font-normal">password</span>
              </div>
            </div>
            <div className="flex justify-center text-[0.8rem] pb-[2%] lap:pb-[0px] max-[370px]:text-center ">
              <div className="text-gray-400">
                Нет аккаунта?{" "}
                <span className="text-black font-medium">
                  Зарегистрироваться бесплатно
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
