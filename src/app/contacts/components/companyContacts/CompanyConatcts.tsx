import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

import { MapPin } from "lucide-react";
export default function CompanyContacts() {
  return (
    <>
      <div className="flex flex-col gap-[2rem] p-[5%] border-[2px] w-[93%] rounded-[1rem] border-gray-100 shadow-xl lap:w-[85%] ">
        <div className="text-[1.1rem]">Другие способы связи</div>
        <div className="flex gap-[3%] ml-[3%] hover:translate-x-2 hover:bg-gray-100 rounded-[1rem]  transition-transform">
          <Mail></Mail>
          <div className="flex flex-col text-gray-400 ">
            <div className="flex flex-col gap-[0.3rem]">
              <div className="text-black font-bold text-[0.9rem]">Email</div>
              <div className="text-[0.8rem]">support@aiplus.com</div>
              <div className="text-[0.8rem]">Ответ в течение 2-4 часов</div>
            </div>
          </div>
        </div>
        <div className="flex gap-[3%] ml-[3%]  hover:translate-x-2 hover:bg-gray-100 rounded-[1rem]  transition-transform">
          <Phone></Phone>
          <div className="flex flex-col text-gray-400 ">
            <div className="flex flex-col gap-[0.3rem]">
              <div className="text-black font-bold text-[0.9rem]">Phone</div>
              <div className="text-[0.8rem]">+7 (495) 123-45-67</div>
              <div className="text-[0.8rem]">Пн-Пт: 9:00-18:00 MSK</div>
            </div>
          </div>
        </div>
        <div className="flex gap-[3%] ml-[3%]  hover:translate-x-2 hover:bg-gray-100 rounded-[1rem]  transition-transform">
          <MapPin></MapPin>
          <div className="flex flex-col text-gray-400">
            <div className="flex flex-col gap-[0.3rem]">
              <div className="text-black font-bold text-[0.9rem]">Офис</div>
              <div className="text-[0.8rem]">Москва, Россия</div>
              <div className="text-[0.8rem]">ул. Тверская, 12, офис 456</div>
            </div>
          </div>
        </div>
        <div className="flex gap-[3%] ml-[3%]  hover:translate-x-2 hover:bg-gray-100 rounded-[1rem]  transition-transform">
          {/* <Email></Email> */}
          <Mail></Mail>
          <div className="flex flex-col text-gray-400">
            <div className="flex flex-col gap-[0.3rem]">
              <div className="text-black font-bold text-[0.9rem]">
                Часы работы
              </div>
              <div className="text-[0.8rem]">Пн-Пт: 9:00 - 18:00 MSK</div>
              <div className="text-[0.8rem]">Telegram доступен 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
