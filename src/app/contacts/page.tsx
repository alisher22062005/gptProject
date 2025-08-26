"use client";

import { motion } from "framer-motion";
import Info from "./components/Info/Info";
import Header from "@/shared/Header/Header";
import Links from "@/shared/Links/Links";
import { Footer } from "../../shared/Footer/Footer";

export default function Contacts() {
  return (
    <>
      {/* Header appears immediately */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Info fades in on scroll */}
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
        <Links />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
