import Switch from "@mui/material/Switch";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  switchToMonth,
  switchToYear,
} from "@/store/Slices/switchPrice/switchPrice";
export default function Saving() {
  const dispatch = useAppDispatch();
  const isMonth = useAppSelector((state) => state.switchPrice.isMonth);

  return (
    <>
      <div className="flex flex-col items-center gap-[1.5rem] pt-[12%] pb-[12%] lap:pt-[5%] lap:pb-[7%] ">
        <div className="w-[85%] flex justify-center text-[1rem]">
          Простые, прозрачные цены
        </div>
        <div className="text-center w-[90%] lap:w-[50%] text-gray-400">
          Выберите идеальный план для ваших потребностей в ИИ. Все планы
          включают доступ к нашим премиальным моделям.
        </div>
        <div className="flex gap-[2%] w-full justify-center text-[0.9rem] font-semibold">
          <div className="flex items-center">Месяц</div>
          <div className="flex items-center ">
            <Switch
              onClick={
                isMonth
                  ? () => dispatch(switchToYear())
                  : () => dispatch(switchToMonth())
              }
              sx={{ width: "3.5rem" }}
            ></Switch>
          </div>
          <div className="flex items-center">Год</div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[35%] lap:w-[12%] text-green-500 flex items-center "
          >
            (Экономия 17%)
          </motion.div>
        </div>
      </div>
    </>
  );
}
