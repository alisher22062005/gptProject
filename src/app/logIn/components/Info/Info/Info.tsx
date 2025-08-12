import { Brain } from "lucide-react";
export default function Info() {
  return (
    <>
      <div className="flex flex-col gap-[1.5rem] m-auto w-full pt-[30%] lap:pt-[10%]">
        <div className="flex gap-[1%] justify-center w-full">
          {" "}
          <div>
            <Brain width={35} height={35}></Brain>
          </div>
          <div className="flex items-center">AI Plus</div>
        </div>

        <div className="flex flex-col gap-[0.5rem] w-full items-center">
          <div className="flex w-full justify-center">Войти в ваш аккаунт</div>
          <div className="text-center w-[90%] text-gray-400 ">
            Получите доступ к панели управления ИИ и управляйте подпиской
          </div>
        </div>
      </div>
    </>
  );
}
