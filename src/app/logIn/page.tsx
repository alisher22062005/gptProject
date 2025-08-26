"use client";
import { motion } from "framer-motion";
import Info from "./components/Info/Info/Info";
import Header from "@/shared/Header/Header";
import LogInForm from "./components/Info/LogInForm/LogInForm";

export default function LogIn() {
  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* Header (appears immediately) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Info (appears on scroll) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Info />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <LogInForm />
      </motion.div>
    </div>
  );
}
