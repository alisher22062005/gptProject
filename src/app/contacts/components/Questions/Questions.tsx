export default function Questions() {
  return (
    <>
      <div className="flex flex-col p-[5%] border-[2px] border-gray-200 rounded-[1rem] w-[93%] gap-[1rem] shadow-xl lap:w-[85%]  ">
        <div className="text-[1rem] ">Часто задаваемые вопросы</div>
        <div className="flex flex-col gap-[1.5rem]  w-full">
          <div className="flex flex-col gap-[0.2rem] p-[3%] hover:scale-[1.01] hover:bg-gray-100 rounded-[1rem] transition-transform">
            <div className="font-semibold text-[0.9rem]">
              Как начать использовать AI Plus?
            </div>
            <div className="text-gray-400 text-[0.8rem] ">
              Просто зарегистрируйтесь для получения бесплатного пробного
              периода. Кредитная карта не требуется.
            </div>
          </div>

          <div className="flex flex-col gap-[0.2rem] p-[3%] hover:scale-[1.01] hover:bg-gray-100 rounded-[1rem] transition-transform">
            <div className="font-semibold text-[0.9rem]">
              {" "}
              Могу ли я отменить подписку в любое время?{" "}
            </div>
            <div className="text-gray-400 text-[0.8rem]">
              Да, вы можете отменить подписку в любое время без дополнительных
              комиссий.
            </div>
          </div>
          <div className="flex flex-col gap-[0.2rem] p-[3%] hover:scale-[1.01] hover:bg-gray-100 rounded-[1rem] transition-transform">
            <div className="font-semibold text-[0.9rem]">
              {" "}
              Предлагаете ли вы корпоративные планы?{" "}
            </div>
            <div className="text-gray-400 text-[0.8rem]">
              Да, у нас есть специальные корпоративные планы с дополнительными
              функциями и поддержкой.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
