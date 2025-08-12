import { Twitter } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MapPin } from "lucide-react";
import { Brain } from "lucide-react";
export default function Links() {
  return (
    <>
      <div className="flex tab:flex-row flex-col pb-[3rem]  tab:gap-[5%]  gap-[3rem] p-[4%]  justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 text-[0.9rem] pt-[3rem] tab:gap-[0px] ">
        <div className="flex flex-col gap-[2rem] tab:w-[20%]">
          <div className="font-medium text-[1.2rem] text-white flex gap-[3%]">
            <div className="flex justify-center items-center">
              <Brain className="text-blue-400"></Brain>
            </div>
            <div className="text-[1.1rem]">AI Plus</div>
          </div>
          <div className="flex tab:flex-col">
            <div>
              Делаем передовые AI технологии доступными для всех.{" "}
              <span className="tab:hidden">
                Присоединяйтесь к будущему искусственного интеллекта уже
                сегодня.
              </span>{" "}
            </div>
            <div className="tab:flex hidden">
              Присоединяйтесь к будущему искусственного интеллекта уже сегодня.
            </div>
          </div>
          <div className="flex gap-[7%]">
            <div className="bg-gray-700 p-[2%] rounded-[0.5rem]">
              <Twitter />
            </div>

            <div className="bg-gray-700 p-[2%] rounded-[0.5rem]">
              <Github />
            </div>
            <div className="bg-gray-700 p-[2%] rounded-[0.5rem]">
              <Instagram />
            </div>
            <div className="bg-gray-700 p-[2%] rounded-[0.5rem]">
              <Linkedin />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem]">
          <div className="font-medium text-[1.1rem] text-white">
            Быстрые ссылки
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="hover:text-blue-400">О нас</div>
            <div className="hover:text-blue-400">Цены</div>
            <div className="hover:text-blue-400">Сравнение моделей</div>
            <div className="hover:text-blue-400">Контакты</div>
            <div className="hover:text-blue-400">Панель управления</div>
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="font-medium text-[1.1rem] text-white">Поддержка</div>
          <div className="flex flex-col gap-[1rem]">
            <div className="hover:text-blue-400">Документация</div>
            <div className="hover:text-blue-400">API руководство</div>
            <div className="hover:text-blue-400">Часто задаваемые вопросы</div>
            <div className="hover:text-blue-400">Статус системы</div>
            <div className="hover:text-blue-400">Сообщество</div>
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="font-medium text-[1.1rem] text-white">
            Связаться с нами
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex flex-col">
              <div className="flex gap-[5%] ">
                <div>
                  <Mail className="text-blue-400"></Mail>
                </div>

                <div className="flex items-center">support@aiplus.com</div>
              </div>
              <div className="text-[0.8rem]">Поддержка 24/7</div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-[5%] ">
                <div>
                  <Phone className="text-blue-400"></Phone>
                </div>

                <div className="flex items-center">+77089737816</div>
              </div>
              <div className="text-[0.8rem]">Пн-Пт: 9:00-18:00 </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-[5%] ">
                <div>
                  <MessageCircle className="text-blue-400"></MessageCircle>
                </div>

                <div className="flex items-center">Онлайн чат</div>
              </div>
              <div className="text-[0.8rem]">В вашем аккаунте</div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-[5%] ">
                <div>
                  <MapPin className="text-blue-400"></MapPin>
                </div>

                <div className="flex items-center">Москва, Россия</div>
              </div>
              <div className="text-[0.8rem]">ул. Тверская, 12</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
