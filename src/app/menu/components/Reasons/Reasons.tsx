"use client";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
export default function Reasons() {
  return (
    <>
      <div className="flex flex-col gap-[5rem] tab:pt-[12%] pt-[25%] justify-center items-center text-[0.9rem] pb-[7%]">
        <div className="flex flex-col gap-[1.5rem] w-full">
          <div className="flex justify-center font-bold text-[1.1rem] ">
            Почему стоит выбрать AI Plus?
          </div>
          <div className="w-full flex justify-center">
            <div className="tab:max-w-[50%] w-[90%]  text-center">
              Получите премиальные возможности ИИ с надежностью и поддержкой
              корпоративного уровня.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start tab:flex-row flex-col w-full tab:gap-[5%] gap-[3rem] text-[0.9rem]">
          <div className="flex flex-col tab:w-[23%]  gap-[1rem]">
            <div className=" flex justify-center items-center">
              <FlashOnRoundedIcon fontSize="large"></FlashOnRoundedIcon>
            </div>
            <div className="flex justify-center">Молниеносная скорость</div>
            <div className="text-gray-500 text-center p-[3%] tab:p-[0px] ">
              Ответ приходит очень быстро. Мы стараемся, чтобы вы не ждали ни
              секунды больше, чем нужно.
            </div>
          </div>

          <div className="flex flex-col tab:w-[27%]  gap-[1rem]">
            <div className=" flex justify-center items-center">
              <SecuritySharpIcon fontSize="large"></SecuritySharpIcon>
            </div>
            <div className="flex justify-center items-center w-full ">
              Безопасность и конфиденциальность
            </div>
            <div className="text-gray-500 text-center  p-[3%] tab:p-[0px]">
              Ваши данные под охраной. Мы используем надёжные методы, чтобы
              защитить вашу информацию от любых угроз.
            </div>
          </div>
          <div className="flex flex-col tab:w-[23%]  gap-[1rem] justify-start">
            <div className=" flex justify-center items-center">
              <PublicSharpIcon fontSize="large"></PublicSharpIcon>
            </div>
            <div className="flex justify-center">Глобальный доступ</div>
            <div className="text-gray-500 text-center  p-[3%] tab:p-[0px]">
              Платформа работает везде. Вы можете пользоваться сервисом быстро и
              удобно в любой точке мира.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
