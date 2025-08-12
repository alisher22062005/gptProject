export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-[1.5rem] pt-[10%] lap:pt-[0px] w-full text-gray-400 pb-[15%] lap:pb-[5%] text-[0.9rem]">
        <div className="w-full text-center pl-[5%] pr-[5%]">
          Все планы включают 7-дневный бесплатный пробный период. Кредитная
          карта не требуется.
        </div>
        <div className="w-full text-center pl-[5%] pr-[5%]">
          Нужно индивидуальное решение?
          <span className="text-black font-medium"> Свяжитесь с нами</span> для
          корпоративных цен.
        </div>
      </div>
    </>
  );
}
