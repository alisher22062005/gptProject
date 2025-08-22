// import CompanyContacts from "../companyContacts/CompanyConatcts";
// import Questions from "../Questions/Questions";
// import Telegram from "../Telegram/Telegram";
// import Telegram2 from "../Telegram2/Telegram2";
// export default function Info() {
//   return (
//     <>
//       <div className="flex flex-col pt-[10%] lap:pt-[7%] gap-[2.5rem] lap:pb-[5%] ">
//         <div className="flex flex-col w-full items-center gap-[1.5rem]">
//           <div>Свяжитесь с нами</div>
//           <div className="text-center w-[90%] lap:w-[50%] text-[0.9rem] text-gray-500 ">
//             Есть вопросы о AI Plus? Нужна помощь с вашим аккаунтом? Мы здесь,
//             чтобы помочь. Свяжитесь с нами любым удобным способом.
//           </div>
//         </div>
//         <div className="flex flex-col gap-[2rem] lap:flex-row-reverse lap:items-start justify-center">
//           <div className="flex flex-col gap-[2rem] lap:w-[50%]">
//             <div className="flex justify-center">
//               <CompanyContacts></CompanyContacts>
//             </div>
//             <div className="flex justify-center">
//               <Questions></Questions>
//             </div>
//           </div>
//           <div className="flex justify-center lap:w-[50%]  ">
//             <Telegram></Telegram>
//           </div>
//           <div className="flex justify-center pb-[10%] min-[501px]:hidden">
//             <Telegram2></Telegram2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import CompanyContacts from "../companyContacts/CompanyConatcts";
import Questions from "../Questions/Questions";
import Telegram from "../Telegram/Telegram";
import Telegram2 from "../Telegram2/Telegram2";

export default function Info() {
  return (
    <div className="flex flex-col pt-[10%] lap:pt-[7%] gap-[2.5rem] lap:pb-[5%]">
      {/* Title & description */}
      <motion.div
        className="flex flex-col w-full items-center gap-[1.5rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>Свяжитесь с нами</div>
        <div className="text-center w-[90%] lap:w-[50%] text-[0.9rem] text-gray-500">
          Есть вопросы о AI Plus? Нужна помощь с вашим аккаунтом? Мы здесь,
          чтобы помочь. Свяжитесь с нами любым удобным способом.
        </div>
      </motion.div>

      {/* Contacts & Telegram section */}
      <div className="flex flex-col gap-[2rem] lap:flex-row-reverse lap:items-start justify-center">
        {/* Left side */}
        <motion.div
          className="flex flex-col gap-[2rem] lap:w-[50%]"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center">
            <CompanyContacts />
          </div>
          <div className="flex justify-center">
            <Questions />
          </div>
        </motion.div>

        {/* Right side (Telegram desktop) */}
        <motion.div
          className="flex justify-center lap:w-[50%]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Telegram />
        </motion.div>

        {/* Telegram mobile */}
        <motion.div
          className="flex justify-center pb-[10%] min-[501px]:hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Telegram2 />
        </motion.div>
      </div>
    </div>
  );
}
