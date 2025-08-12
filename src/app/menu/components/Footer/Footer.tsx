export default function Footer() {
  return (
    <>
      <div className="flex justify-center p-[2%] gap-[1rem] tab:gap-[5%] tab:flex-row flex-col   text-gray-500 text-[0.8rem] bg-gray-900 border-t border-gray-700 pb-[1.5rem]  ">
        <div className="flex items-center justify-center tab:justify-start">
          © 2024 AI Plus. Все права защищены.
        </div>
        <div className="flex flex-wrap  gap-[5%] tab:w-[45%] tab:ml-[15%] justify-center">
          <button className="hover:text-blue-400 flex items-center">
            Политика конфиденциальности
          </button>
          <button className="hover:text-blue-400 flex items-center">
            {" "}
            Условия использования
          </button>
          <button className="hover:text-blue-400 flex items-center">
            Cookies
          </button>
          <button className="hover:text-blue-400 flex items-center">
            Безопасность
          </button>
        </div>
      </div>
    </>
  );
}
