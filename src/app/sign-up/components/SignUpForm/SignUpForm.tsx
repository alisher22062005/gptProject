import Input from "@/shared/Input/Input";
export default function SignUpForm() {
  return (
    <>
      <div className="flex flex-col mt-[10%] lap:mt-[5%]   gap-[0.5rem] w-full items-center pb-[10%] lap:pb-[5%]  ">
        <div className="w-[93%] lap:w-[35%] border-[2px] p-[5%] lap:p-[4%]  border-gray-300 gap-[1rem] bg-white flex flex-col rounded-[1rem] ">
          {" "}
          <div className="flex justify-center">Регистрация в AI Plus</div>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex flex-col font-medium  ml-[5%] w-full">
              <div className="text-[0.9rem]">Полное имя *</div>

              <Input placeHolder="Введите ваше польное имя"></Input>
            </div>
            <div className="flex flex-col font-medium  ml-[5%] w-full">
              <div className="text-[0.9rem]">Email адрес *</div>

              <Input placeHolder="Введите ваш email"></Input>
            </div>
            <div className="flex flex-col font-medium  ml-[5%] w-full ">
              <div className="text-[0.9rem]">Пароль *</div>

              <Input placeHolder="Создайте пароль (мин. 6 символов)"></Input>
            </div>
            <div className="flex flex-col ml-[5%] w-full font-medium">
              <div className="text-[0.9rem]">Подтвердите пароль *</div>

              <Input placeHolder="Подтвердите ваше пароль"></Input>
            </div>
            <div className="flex justify-start w-full ml-[5%] ">
              <button className="border-2px text-[0.9rem]  w-[90%] bg-black text-white p-[1%] hover:bg-gray-900 rounded-[0.5rem]  ">
                Создать аккаунт
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[2%]">
            <div className="flex items-center justify-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-[0.8rem]">
                Включен бесплатный пробный период 7 дней
              </span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center text-[0.8rem] pb-[2%] lap:pb-[0px] max-[370px]:text-center ">
              <div className="text-gray-400">
                Уже есть аккаунт?
                <span className="text-black font-medium">Войти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
