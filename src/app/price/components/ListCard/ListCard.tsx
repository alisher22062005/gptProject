import { Card } from "@/app/price/Interfaces/Card";
import PriceCard from "../PriceCard/PriceCard";
import { Star } from "lucide-react";
import { Crown } from "lucide-react";
import { Zap } from "lucide-react";
export default function ListCard() {
  const card1: Card = {
    icon: <Star color="white" size={35}></Star>,
    name: "Базовый",
    price: "$9",
    forWhom: "Идеально для знакомства с ИИ",
    description: [
      "Доступ к GPT-3.5 Turbo",
      "100,000 токенов/месяц",
      "Стандартная поддержка",
      "Длина контекста 2K",
      "Базовая аналитика",
    ],
  };

  const card2: Card = {
    icon: <Crown size={35} color="white"></Crown>,
    name: "Профи",
    price: "$29",
    forWhom: "Самый популярный для профессионалов",
    description: [
      "Доступ к GPT-4",
      "500,000 токенов/месяц",
      "Приоритетная поддержка",
      "Длина контекста 8K",
      "Продвинутая аналитика",
      "Доступ к API",
      "Пользовательские интеграции",
    ],
  };

  const card3: Card = {
    icon: <Zap size={35} color="white"></Zap>,
    name: "Турбо",
    price: "$99",
    forWhom: "Для опытных пользователей и команд",
    description: [
      "Доступ к GPT-4 Turbo",
      "Неограниченные токены",
      "Круглосуточная поддержка 24/7",
      "Длина контекста 32K",
      "Аналитика в реальном времени",
      "Приоритетный доступ к API",
      // "Опции белой метки",
      "Командная работа",
    ],
  };

  const array: Card[] = [];
  array.push(card1);
  array.push(card2);
  array.push(card3);

  return (
    <>
      <div className="flex flex-col gap-[1.5rem] lap:gap-[0px] lap:flex-row">
        {array.map((item, index) => {
          return <PriceCard key={index} card={item}></PriceCard>;
        })}
      </div>
    </>
  );
}
