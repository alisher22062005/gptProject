"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/configure";
import Header from "@/shared/Header/Header";
import ProtectedPage from "../firebase/ProtectedPage";

export default function Profile() {
  ProtectedPage();
  const [isLogIn, setIsLogin] = useState(false);
  const [email, setEmail] = useState<React.ReactNode>("");
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log("User:", setEmail(currentUser?.email));
      if (currentUser) setIsLogin(true);
      else setIsLogin(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[100vh] w-full text-[2rem]">
        {email}
      </div>
    </>
  );
}
